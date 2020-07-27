const Sequelize = require('sequelize');

const sequelize = require('../config/controller');

const Sales = sequelize.define('Sales', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	product_id: {
		type: Sequelize.INTEGER,
		references: 'product',
		referenceKey: 'id',
	},
	user_id: {
		type: Sequelize.INTEGER,
		references: 'user',
		referenceKey: 'id',
	},
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: true,
	},
});

module.exports = Sales;
