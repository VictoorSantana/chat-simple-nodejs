const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('rooms', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_user: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	id_file: {
		type: Sequelize.INTEGER(),
		allowNull: true,
	},
	name: {
		type: Sequelize.STRING(45),
		allowNull: false,
		defaultValue: 'Não disponível',
	},
	kind: {
		type: Sequelize.INTEGER(),
		allowNull: true,
	},
}, { timestamps: true });

module.exports = model;