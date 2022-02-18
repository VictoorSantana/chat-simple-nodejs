const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('friends', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_user_owner: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	id_user_friend: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
}, { timestamps: true });

module.exports = model;