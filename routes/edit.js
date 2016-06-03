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

/* GET home page. */
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
 
    res.render('edit');
      }
    });
  } else {
    res.render('login');
   // res.writeHead(302, {location: "https://comp-check-boao987.c9users.io/login"});
  }

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
