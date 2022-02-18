
const requestFriendRepository = require('./request-friend.repository');
const friendRepository = require('../friend/friend.repository');

const userRepository = require('../user/user.repository');
const authRepository = require('../auth/auth.repository');
const { onlyNumbers, resume } = require('../../config/filter');

module.exports = {
	find: async function (query, user) {
		let exclude = [];
		let include = [];

		const { paginate } = resume(query, []);

		return await requestFriendRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				where: { id_user_to: user.id }
			});
	},

	requestsToMe: async function (user) {
		return await requestFriendRepository
			.count({
				where: { 
					id_user_to: user.id ,
					status: 1
				}
			});
	},

	rejectOrAcceptNewFriend: async function (query, user) {
		// console.log('query.accept !== 1', query.accept !== '1');
		if (query.accept !== '1' && query.accept !== '0') {
			throw new Error('Envie o parametro query accept igual a 1 ou 0.');
		}

		if (!query.id) {
			throw new Error('Envie o parametro query identificador da solicitação de amizade.');
		}

		const accepted = Number(query.accept);

		if (accepted) {
			const rawRequest = await requestFriendRepository.findOne({
				where: { id: onlyNumbers(query.id) },
				raw: true
			});

			if (!rawRequest) {
				throw new Error('Não foi encontrada a solicitação de amizade!');
			}

			await requestFriendRepository
				.update({ status: 2 }, {
					where: {
						id: onlyNumbers(query.id)
					}
				});

			await friendRepository
				.create({
					id_user_owner: rawRequest.id_user_from,
					id_user_friend: rawRequest.id_user_to,
				})

			await friendRepository
				.create({
					id_user_owner: rawRequest.id_user_to,
					id_user_friend: rawRequest.id_user_from,
				})

			return 'ok';
		} else {
			await requestFriendRepository
				.update({ status: 0 }, {
					where: {
						id: onlyNumbers(query.id)
					}
				})

			return 'ok';
		}
	},

	create: async function (value, query, user) {
		if (!query.called) {
			throw new Error('Envie o parametro query "called"');
		}

		const auths = await authRepository
			.findAll({
				where: { username: query.called },
				raw: true,
				limit: 1
			});

		const users = await userRepository
			.findAll({
				where: { email: query.called },
				raw: true,
				limit: 1
			});

		let friendId = null;
		if (auths.length) {
			friendId = auths[0].id_user
		}
		if (users.length) {
			friendId = users[0].id
		}


		if (friendId) {

			const requested = await requestFriendRepository
				.findAll({
					where: {
						id_user_from: user.id,
						id_user_to: friendId
					},
					raw: true,
					order: [['createdAt', 'DESC']],
				});

			const ONE_HOUR = 60 * 60 * 1000;

			if (requested.length) {
				const check = new Date(requested[0].createdAt).getTime() * ONE_HOUR * 2 < new Date().getTime();

				if (!check) {
					throw new Error('Pedido já foi enviado em menos de duas horas, aguarde para enviar novamente!');
				}
			}

			if (requested.status === 2) {
				throw new Error(`Usuário já é seu amigo`);
			}

			await requestFriendRepository
				.create({ id_user_from: user.id, id_user_to: friendId, status: 1 });
		}

		return 'ok';
	},

	update: async function (id, value) {
		await requestFriendRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await requestFriendRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}