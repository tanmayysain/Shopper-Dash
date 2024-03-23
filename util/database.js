const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'tanmay@304',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
