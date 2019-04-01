const Sequelize = require('sequelize');
const db = require('./index.js');


const Home = db.define('Home', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  locationName: Sequelize.STRING,
  photoUrl: Sequelize.STRING,
  rating: Sequelize.INTEGER,
});

module.exports = Home;
