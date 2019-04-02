const Sequelize = require('sequelize');
const key = process.env.MYSQL_ROOT_PW || require('../../config');

const db = new Sequelize('FEC', 'root', key, {
  host: 'localhost',
  dialect: 'mysql',
});

db
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to database: ', err));


module.exports = db;
