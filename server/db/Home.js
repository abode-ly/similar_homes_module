const Sequelize = require('sequelize');
const db = require('./index.js');


const Home = db.define('Home', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  propertyAvail: Sequelize.STRING,
  locationName: Sequelize.STRING,
  photoUrl: Sequelize.STRING,
  price: Sequelize.INTEGER,
  rating: Sequelize.STRING,
  reviewCount: Sequelize.INTEGER,
});

module.exports = Home;
