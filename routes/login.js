var express = require('express');
var router = express.Router();

var app = express();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  console.log(req.body.password);

  var database = require('../databaseModule.js');
  database.init();

  database.userExists(req.body.username, function(message) {
    if (message == false) {
      console.log("User Does Not Exist!");
      res.render('login', {error: "Error: User Does Not Exist!"});
    }
    else { // User Exists
      console.log("Logging In!");
      database.authenticate(req.body.username, req.body.password, function(message) {
        if (message == false) {
          res.render('login', {error: "Error: Password Does Not Match The Given User!"});
        }
        else {
          req.session.username = req.body.username;
          console.log("SESSION INIT:" + req.session);
          res.render('login', {error: "Login Succesful!"});
        }
      });
    }
  });
});

module.exports = router;
