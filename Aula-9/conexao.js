const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Postagem
const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

// Postagem.create({
//   titulo: "Um Titulo qualquer",
//   conteudo: "Winggardium-leviosa"
// });

const Usuario = sequelize.define('usuarios',{
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

// Usuario.sync({force: true});

// Usuario.create({
//   nome: "Lucas",
//   sobrenome: "Zacarias",
//   idade: 18,
//   email: "Lucas@email.com"
// });
