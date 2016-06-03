var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.passwordc);
  if (req.body.password != req.body.passwordc) {
    res.render('signup', {error: "Error: Password and Confirm Password Do Not Match!"});
  }
  else {
    var database = require('../databaseModule.js');
    database.init();

    database.userExists(req.body.username, function(message) {
      if (message == true) {
        console.log("User Exists");
        res.render('signup', {error: "Error: User Already Exists!"});
      }
      else {
        console.log("Adding User!");
        database.addUser(req.body.username, req.body.password);
        res.redirect('login');
      }
    });
  }
});

module.exports = router;
