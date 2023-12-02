// routes/api/test.js
var express = require('express');
var router = express.Router();

/* GET test listing. */
router.get('/', function(req, res) {
  res.send('responding testing');
});

module.exports = router;