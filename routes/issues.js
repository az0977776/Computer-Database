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
      {"computerID": "cslab-1-9", "description": "SSH not working.", "issueLevel": 0},
      {"computerID": "cslab-1-10", "description": "Internet not working.", "issueLevel": 1},
      {"computerID": "cslab-1-11", "description": "Screen was cracked in half.", "issueLevel": 2},
      {"computerID": "cslab-1-15", "description": "Login not working.", "issueLevel": 2}
    ]});
  }
  else {
    res.redirect('login');
  }

});

module.exports = router;
