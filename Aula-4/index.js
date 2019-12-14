const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Seja Bem-Vindo ao meu App!");
});


app.get("/sobre", function(req, res) {
  res.send("Minha pagina sobre");
});


app.get("/blog", function(req, res) {
  res.send("Bem-vindo ao meu blog!");
});

app.listen(8040, function() {
  console.log("Servidor Rodando na url \" http://localhost:8040 \"");
});
//localHost:8040
