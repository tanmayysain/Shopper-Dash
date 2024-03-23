const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product  = sequelize.define('product',{
        id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNUll: false,
          primaryKey: true,
        },
        title:Sequelize.STRING,
        price:{
          type:Sequelize.DOUBLE,
          allowNUll: false,
        },
        imageUrl:{
          type: Sequelize.STRING,
          allowNUll: false,
        },
        description:{
          type: Sequelize.STRING,
          allowNUll: false,
  }
});

module.exports = Product;