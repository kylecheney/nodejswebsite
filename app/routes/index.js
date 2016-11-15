app.get('/', function(req, res) {
  res.send(data.rooms[0].name);
})
