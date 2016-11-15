var express = require('express');
var router = express.Router();

router.get('/narnia', function (req,res) {
  res.send(`
    <h1>For Narnia!</h1>
    ${data.rooms[1].name}
    `)
})
