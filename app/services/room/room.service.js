
const roomRepository = require('./room.repository');
const { onlyNumbers, resume } = require('../../config/filter');

module.exports = {
	find: async function (query, user) {
		let exclude = [];
		let include = [];

		const { paginate } = resume(query, []);

		console.log(user);

		return await roomRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				where: { id_user: user.id }
			});
	},

	findOne: async function (id) {
		let exclude = [];
		return await roomRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},

	create: async function (value) {
		return await roomRepository
			.create(value);
	},

	update: async function (id, value) {
		await roomRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await roomRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}