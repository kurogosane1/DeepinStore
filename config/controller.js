const Sequelize = require('sequelize');

// const user = 'root';
// const password = 'password';
// const database = 'test';

const sequelize = new Sequelize('test', 'root', 'password', {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = sequelize;
