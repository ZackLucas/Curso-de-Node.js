const express = require('express');

const app = express();

app.get("/", function(req, res) {
  res.send("Hello!");
});

app.get('/sobre', function(req, res) {
  res.send('Bem-Vindos a minha pagina sobre:');
});

app.get('/blog', function(req, res) {
  res.send("Bem-Vindo ao meu blog!");
});

app.get("/ola/:cargo/:nome/:cor", function(req, res) {
  res.send("<h1>Ola " + req.params.nome + "</h1>" +
           "<h2>Seu Cargo e: " + req.params.cargo + "</h2>" +
           "<h3>Sua cor preferida e: " + req.params.cor + "</h3>");
});

app.listen(8040, function() {
  console.log("Servidor Rodando...");
  console.log('Acesse: " http://localhost:8040/ "');
  //localhost:8040
})
