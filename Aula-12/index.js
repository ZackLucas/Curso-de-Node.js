const Express    = require('express');
const app        = Express();
const handlebars = require('express-handlebars');
const Sequelize  = require('sequelize');

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Conexão com o Banco de Dados MySQL
        const sequelize = new Sequelize('sistemadecadastro', 'root', 'senha', {
            host    : 'localhost',
            dialect : 'mysql'
        });

// Rotas
    app.get('/cad', function(req, res){
        res.render('formulario');
    });

    app.post('/add', function(req, res){
        res.send('Formulario RECEBIDO');
    });


// abrir servidor
    app.listen(8040, function() {
        console.log('servidor rodando... "localhost:8040 "');
    });