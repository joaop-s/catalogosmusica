const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres', // ou 'mysql', dependendo do seu banco
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false, // Para desabilitar logs
});

module.exports = sequelize;
