const Sequelize = require('sequelize');

const conn = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

module.exports = conn