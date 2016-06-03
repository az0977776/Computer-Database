var express = require('express');
var router = express.Router();


var app = express();
//sessions
var cookieParser = require('cookie-parser');
var session = require("client-sessions");



app.use(session({
  cookieName: 'session',
  secret: 'applekim.thunderbird',
  duration: 30 * 60 * 1000,//idle time until logout
  activeDuration: 5 * 60 * 1000,//updates time until logout
}));

/* GET issues page. */
router.get('/', function(req, res, next) {
    var database = require('../databaseModule.js');
  database.init();
    if (req.session && req.session.user) { // Check if session exists
    // lookup the user in the DB by pulling their email from the session
     database.userExists(req.body.username, function(message) {
    if (message == false) {
        // if the user isn't found in the DB, reset the session info and
        // redirect the user to the login page
        req.session.reset();
        res.redirect('/login');
      } else {
 
     res.render('issues',
      {issues: [
       {"name": "cslab-1-9", "description": "SSH not working.", "level": 0},
       {"name": "cslab-1-10", "description": "Internet not working.", "level": 1},
       {"name": "cslab-1-11", "description": "Screen was cracked in half.", "level": 2},
       {"name": "cslab-1-15", "description": "Login not working.", "level": 2}
     ]});
     
      }
    });
  } else {
    res.render('login',{error: "Error: You must log in first!"});
  }

   
});

module.exports = router;
