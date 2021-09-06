const {Sequelize} = require('sequelize');
require('dotenv').config();

const {HOST, DB_NAME, DB_USERNAME, DB_PASSWORD} = process.env;


const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD , {
    dialect: 'postgres',
    host: HOST,
    define: {
        timestamps: false
      },
});


module.exports = sequelize;