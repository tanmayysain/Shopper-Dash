const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Order = sequelize.define('order',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNUll: false,
        primaryKey: true,
    },
    quantity: Sequelize.INTEGER,
});

module.exports = Order;