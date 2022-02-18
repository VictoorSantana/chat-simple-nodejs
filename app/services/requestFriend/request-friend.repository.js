const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('request_friends', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_user_from: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	id_user_to: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	status: {
		type: Sequelize.INTEGER(),
		allowNull: true,
		defaultValue: '1',

		// {"value": "2", "label": "Aceito"},
        //                     {"value": "1", "label": "Solicitado"}, 
        //                     {"value": "0", "label": "Ignorado"}
	},
}, { timestamps: true });

module.exports = model;