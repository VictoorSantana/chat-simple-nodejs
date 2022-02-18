const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('chats', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_user_owner: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	id_room: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	id_file: {
		type: Sequelize.INTEGER(),
		allowNull: true,
	},
	message: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	kind: {
		type: Sequelize.INTEGER(),
		allowNull: true,
	},
	status: {
		type: Sequelize.INTEGER(),
		allowNull: true,
	},
}, { timestamps: true });

module.exports = model;