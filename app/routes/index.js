var express = require('express');
var router = express.Router();

// var data = require('./')

router.get('/', function(req, res) {
  res.send(data.rooms[0].name);
})

module.exports = router;
