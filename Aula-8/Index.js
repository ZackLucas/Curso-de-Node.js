const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', function(req, res){
  res.sendFile(__dirname + '/html/sobre.html')
})

app.get('/blog', function(req, res){
  res.send("Seja bem-vindo ao meu site!");
});

app.listen(8040, function() {
  console.log("Servidor rodando na url ' localhost:8040 '");
});
