var express = require('express');
var router = express.Router();

var app = express();

/* GET issues page. */
router.get('/', function(req, res, next) {
  var database = require('../databaseModule.js');
  database.init();
  if (req.session.username) {
    res.render('issues',
    {issues: [
      {"name": "cslab-1-9", "description": "SSH not working.", "level": 0},
      {"name": "cslab-1-10", "description": "Internet not working.", "level": 1},
      {"name": "cslab-1-11", "description": "Screen was cracked in half.", "level": 2},
      {"name": "cslab-1-15", "description": "Login not working.", "level": 2}
    ]});
  }
  else {
    res.redirect('login');
  }


});

module.exports = router;
