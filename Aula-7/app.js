const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', function(req, res) {
  res.sendFile(__dirname + "/html/sobre.html")
});

app.listen(8040, function(){
  console.log("Servidor Rodando...")
  //localhost:8040
})
