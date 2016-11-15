var express = require('express');
var router = express.Router();

// var data = require('./')

router.get('/', function(req, res) {
  res.send(`
    <h1>It's working!</h1>
    <img src=https://media0.giphy.com/media/9K2nFglCAQClO/200_s.gif#0></img>
  `);
})

module.exports = router;
