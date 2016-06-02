var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('edit');
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  console.log(req.body.id);
  console.log(req.body.fill);

  var database = require('../databaseModule.js');
  database.init();
  res.render('edit');
});

module.exports = router;
