const Express    = require('express');
const app        = Express();
const Sequelize  = require('sequelize');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

// Config
    // Template Engine
        app.engine('handlebars',handlebars({defalutLayout: 'main'}))
        app.set('view engine', 'handlebars');
    
    //Body parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

    // Conexão com o banco de dados
        const sequelize = new Sequelize('sistemadecadastro', 'root', 'senha', {
            host    : 'localhost',
            dialect : 'mysql'
        });

    app.get('/', function(req, res){
        res.render('formulario');
    })

    app.post('/add', function(req, res){
        req.body.conteudo;
        res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo);
    })

// Abrindo o servidor
    app.listen(8040, function(){
        console.log('Servidor rodando...')
    });