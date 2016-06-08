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

/* POST issues page. */
router.post('/', function(req, res, next) {
  var id = req.body.computerID;
  id = id.trim();
  
  console.log(id);
  
  var database = require('../databaseModule.js');
  database.init();
  database.removeIssue(id);
  database.getAllIssues(function(ret){
    res.render('issues',
    {issues: ret});
  });
});

module.exports = router;
