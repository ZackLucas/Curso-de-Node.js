const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root', 'Lo47810144', {
  host: "localhost",
  dialect: 'mysql',
});

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso");
}).catch(function(erro){
  console.log("Falha ao se conectar: " + erro);
});
