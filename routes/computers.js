var express = require('express');
var router = express.Router();

var app = express();

var login = require('./login');
//sessions
var cookieParser = require('cookie-parser');
var session = require("client-sessions");



app.use(session({
  cookieName: 'session',
  secret: 'applekim.thunderbird',
  duration: 30 * 60 * 1000,//idle time until logout
  activeDuration: 5 * 60 * 1000,//updates time until logout
}));

/* GET computers page. */
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
 
     var rooms = ["307","329","255","234"];
    
     res.render('computers', {"rooms": rooms});
      }
    });
  } else {
    res.render('/login');
   // res.writeHead(302, {location: "https://comp-check-boao987.c9users.io/login"});
  }

});

module.exports = router;
