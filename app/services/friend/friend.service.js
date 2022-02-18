
const friendRepository = require('./friend.repository');

const { onlyNumbers } = require('../../config/filter');
const { getRequestedFriendsAndFriends } = require('../../config/querysUtils');
const { pathTo } = require('../../config/storage');

module.exports = {
	find: async function (query, user) {
		let exclude = [];
		let include = [];

		// const { paginate } = resume(query);

		let queryRaw = await getRequestedFriendsAndFriends(user.id);



		for (let i = 0; i < queryRaw.length; i++) {
			const { photo_hash, photo_type, photo_extension } = queryRaw[i];

			queryRaw[i].url_photo = pathTo(photo_type, photo_hash, photo_extension);
		}

		return queryRaw;
	},

	findOne: async function (id) {
		let exclude = [];
		return await friendRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},

	create: async function (value) {
		return await friendRepository
			.create(value);
	},

	update: async function (id, value) {
		await friendRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await friendRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}