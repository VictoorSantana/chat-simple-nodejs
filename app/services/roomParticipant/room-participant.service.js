
const roomParticipantRepository = require('./room-participant.repository');
const { onlyNumbers, resume } = require('../../config/filter');

module.exports = {
	find: async function (query) {
		let exclude = [];
		let include = [];

		const { paginate, where } = resume(query, [
			{ key: 'id_room', colunm: 'id_room', op: '=' },
			{ key: 'id_user', colunm: 'id_user', op: '=' },
			{ key: 'kind', colunm: 'kind', op: '=' },
		]);

		return await roomParticipantRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				where
			});
	},

	findOne: async function (id) {
		let exclude = [];
		return await roomParticipantRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},

	create: async function (value) {
		return await roomParticipantRepository
			.create(value);
	},

	update: async function (id, value) {
		await roomParticipantRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await roomParticipantRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}