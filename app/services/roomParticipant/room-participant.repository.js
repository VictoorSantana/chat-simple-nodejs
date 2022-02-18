const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('room_participants', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_room: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	id_user: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	kind: {
		type: Sequelize.INTEGER(),
		allowNull: true,
	},
}, { timestamps: true });

module.exports = model;