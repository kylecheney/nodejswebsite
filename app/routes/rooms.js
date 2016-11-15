var express = require('express');
var router = express.Router();

router.get('/narnia', function (req,res) {
  var data = req.app.get('dataFile');
  res.send(`
    <h1>For Narnia!</h1>
    ${data.rooms[1].name}
    `)
})

module.exports = router;
