//---- Setting up a server using only vanilla node -----

// var http = require("http");
//
// var myServer = http.createServer(function (req, res) {
//   res.writeHead(200, {"Content-Type" : "text/html"});
//   res.write("<h1>I love Zoe</h1>");
//   res.end();
// });
//
// myServer.listen(8080);
// console.log("It's working!!!");


//----

var express = require('express');
var data = require('./data/datafile.json');

var app = express();


app.get('/', function(req, res) {
  res.send(data.rooms[0].name);
})

app.get('/narnia', function (req,res) {
  res.send(`
    <h1>For Narnia!</h1>
    $(data.rooms[1].name)
    `)
})

app.listen(8080, function(){
  console.log('listening to the port');
})
