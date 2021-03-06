var express = require('express');
var router = express.Router();

var app = express();

var login = require('./login');

/* GET computers page. */
router.get('/', function(req, res, next) {
  var database = require('../databaseModule.js');
  database.init();
  console.log("SESSION" + req.session.username);
  if (req.session.username) {
    var rooms = ["251","307","325","451"];
    res.render('computers', {"rooms": rooms});
  }
  else {
    res.redirect('login');
  }

});

module.exports = router;
