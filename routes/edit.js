var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('edit');
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  console.log(req.body.id);
  console.log(req.body.level);
  console.log(req.body.fill);

  var check = /cslab[\d]+-[\d]+/;

  if(!check.test(req.body.id)){
    console.log('here');
    res.render('edit', {error: "Error: ID not in correct format! e.g. 'cslab1-5'"})
  }
  else if(req.body.fill == "") {
    res.render('edit', {error: "Error: No Description Entered For Issues!"});
  }
  else if(req.body.level == undefined){
    res.render('edit', {error: "Error: No Level Chosen!"});
  }
  else {
    var database = require('../databaseModule.js');
    database.init();
    res.render('edit');
  }
});

module.exports = router;
