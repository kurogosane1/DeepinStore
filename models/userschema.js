const Sequelize = require('sequelize');

const sequelize = require('../config/controller');

const User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	middleName: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	streetAddress: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	zipcode: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	telephone: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = User;
