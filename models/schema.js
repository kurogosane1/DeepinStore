const Sequelize = require('sequelize');

const sequelize = require('../config/controller');

const User = require('./userschema');
// const Sales = require('./salesSchema');

const Product = sequelize.define('product', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	processor: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	processorprice: {
		type: Sequelize.DOUBLE,
		allowNull: false,
	},
	RAM: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	RAMprice: {
		type: Sequelize.DOUBLE,
		allowNull: false,
	},
	storage: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	storageprice: {
		type: Sequelize.DOUBLE,
		allowNull: false,
	},
	graphics: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	graphicsprice: {
		type: Sequelize.DOUBLE,
		allowNull: false,
	},
});

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
