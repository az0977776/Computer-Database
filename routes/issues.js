var express = require('express');
var router = express.Router();

var app = express();

/* GET issues page. */
router.get('/', function(req, res, next) {
  if (req.session.username) {
    var database = require('../databaseModule.js');
    database.init();
    var mild, moderate, serious;
    database.getIssues(0, function(ret){
      mild = ret.length;
    });
    database.getIssues(1, function(ret){
      moderate = ret.length;
    });
    database.getIssues(2, function(ret){
      serious = ret.length;
    });
    database.getAllIssues(function(ret){
      res.render('issues',
        {zero: mild,
        one: moderate,
        two: serious,
        issues: ret});
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
  
  var database = require('../databaseModule.js');
  database.init();
  database.removeIssue(id);
  
  var mild, moderate, serious;
  database.getIssues(0, function(ret){
    mild = ret.length;
  });
  database.getIssues(1, function(ret){
    moderate = ret.length;
  });
  database.getIssues(2, function(ret){
    serious = ret.length;
  });
  database.getAllIssues(function(ret){
    res.render('issues',
      {zero: mild,
      one: moderate,
      two: serious,
      issues: ret});
  });
});

module.exports = router;
