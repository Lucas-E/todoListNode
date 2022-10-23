const Sequelize = require('sequelize');
const conn = require('./connection');

const todo = conn.define('todo', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

todo.sync().then(()=>{
    console.log('Tabela Criada com Sucesso')
});

module.exports = todo;