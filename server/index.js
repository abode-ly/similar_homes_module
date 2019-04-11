const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');
const db = require('./db/index.js');
const Home = require('./db/Home.js');

const app = express();
const port = process.env.PORT || 3004;


app.use('/similarhomes/:host_id', express.static(path.join(__dirname, '../client/dist')));


app.get('/similarhomes/:host_id/nearby', (req, res) => {
  Home.findAll({ order: Sequelize.literal('rand()'), limit: 12 })
    .then(data => res.send(data))
    .catch(err => res.status(404).end(err));
});

app.listen(port, () => console.log(`yassss port ${port} is live!!!`));
