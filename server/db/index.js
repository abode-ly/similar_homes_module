const Sequelize = require('sequelize');
const key = process.env.MYSQL_ROOT_PW || require('../../config/db-config');

const dbName = process.env.MYSQL_DATABASE || 'FEC';

const db = new Sequelize(dbName, 'root', key, {
  host: process.env.MYSQL_URL || 'localhost',
  dialect: 'mysql',
});

db
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to database: ', err));


module.exports = db;
