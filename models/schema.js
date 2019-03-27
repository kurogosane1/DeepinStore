const Sequelize = require('sequelize');

const sequelize = require('../config/controller');

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
	}
});

module.exports = Product;
