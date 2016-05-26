var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', {route: "signup"});
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.passwordc);
  if (req.body.password != req.body.passwordc) {
    res.render('signup', {route: "signup", error: "Error: Password and Confirm Password Do Not Match!"});
  }
  else {
    var database = require('../databaseModule.js');
    database.init();

    if (database.userExists(req.body.username)) {
      res.render('signup', {route: "signup", error: "Error: User Already Exists!"});
    }
    else {
      console.log("Adding User!");
      database.addUser(req.body.username, req.body.password);
      res.render('signup', {route: "signup", error: "Signup Succesful!"});
    }
  }
});

module.exports = router;
