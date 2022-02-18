
const chatRepository = require('./chat.repository');
const { onlyNumbers, resume } = require('../../config/filter');

module.exports = {
	find: async function (query) {
		let exclude = [];
		let include = [];

		const { paginate, where } = resume(query, [
			{ key: 'id_user_owner', colunm: 'id_user_owner', op: '=' },
			{ key: 'id_room', colunm: 'id_room', op: '=' },
			{ key: 'id_file', colunm: 'id_file', op: '=' },
			{ key: 'message', colunm: 'message', op: 'like%' },
			{ key: 'kind', colunm: 'kind', op: '=' },
			{ key: 'status', colunm: 'status', op: '=' },
		]);

		return await chatRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				where
			});
	},

	findOne: async function (id) {
		let exclude = [];
		return await chatRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},

	create: async function (value) {
		return await chatRepository
			.create(value);
	},

	update: async function (id, value) {
		await chatRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await chatRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}