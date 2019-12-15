const express    = require('express');
const app        = express();
const handlebars = require('express-handlebars');
const Sequelize  = require('sequelize');


// Config
  // Template engine
    app.engine('handlebars', handlebars({defaluLayout: 'main'}));
    app.set('view engine', 'handlebars');
  // Conexão com o banco de dados MySQL
    const sequelize  = new Sequelize('sistemadecadastro', 'root', 'Lo47810144', {
      host     : 'localhost',
      dialect  : 'mysql'
    });


app.listen(8040, function () {
  console.log("servidor rodando em 'localhost:8040 '");
});
