var express = require('express');
var router = express.Router();

var app = express();

/* GET issues page. */
router.get('/', function(req, res, next) {
  if (req.session.username) {
    var database = require('../databaseModule.js');
    database.init();
    database.getAllIssues(function(ret){
      res.render('issues',
      {issues: ret});
    });
  }
  else {
    res.redirect('login');
  }

});

module.exports = router;
