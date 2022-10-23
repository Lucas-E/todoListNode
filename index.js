const PORT = 8080;

const express = require('express');
const app = express();

const Sequelize = require('sequelize');


//configuring ejs
app.set('view engine', 'ejs')

//configuring body-parser
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//create db connection
const conn = require('./database/connection');
conn.authenticate().then(()=>{
    console.log('Conexão feita com sucesso')
})

//create table
const todo = require('./database/todo');

//ROUTES

//get ROUTES

app.get('/', async (req, res) => {

    let qry = await todo.findAll({raw: true});
    console.log(qry)

    res.render('index', data = {dados: qry});
})

app.listen(PORT, () => {
    console.log('Servidor Rodando!');
})

//post ROUTES

app.post('/', (req, res) => {
    let tarefa = req.body.todo;
    console.log(tarefa)
    if(tarefa != null){

        todo.create({
            titulo: tarefa
        });

        console.log('tarefa criada');
        res.redirect('/');

    }
})