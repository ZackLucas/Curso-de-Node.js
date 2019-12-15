const express = require("express");
const app = express();

app.get('/', function(req, res){
  res.send(__dirname + '/html/index.html')
})

app.get('/sobre', function(req, res){
  res.send(__dirname + '/html/sobre.html')
})

app.listen(8040, function() {
  console.log("Servidor rodando na porta ' localhost:8040 '")
})
