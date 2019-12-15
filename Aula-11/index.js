const Express    = require('express');
const app        = Express();
const handlebars = require('express-handlebars')
const Sequelize  = require('sequelize');

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Conexão com o banco de dados
        const sequelize = new Sequelize('sistemadecadastro', 'root', 'senha', {
            host    : 'localhost',
            dialect : 'mysql'
        });
//rotas
    app.get('/cad', function(req, res){
        res.render('formulario');
    })

app.listen(8040, function(){
    console.log("Servidor rodando...");
    console.log('" localhost:8040 "');
});