console.log('something is happening')
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send({sand: 'tree'})
})

app.listen(3050, function(err){
  if (err) return console.log(err)
  console.log('listening on port 3050.....')
})