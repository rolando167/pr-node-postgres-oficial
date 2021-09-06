const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('users',{
	id: {
		primaryKey:true,
		autoIncrement: true,
		type: DataTypes.INTEGER
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	state: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	
}, {
	tableName: 'users',
	freezeTableName: true
});

module.exports = User;