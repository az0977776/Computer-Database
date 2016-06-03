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
  console.log("SESSION" + req.session.username);
  if (req.session.username) {
    var rooms = ["307","329","255","234"];
    res.render('computers', {"rooms": rooms});
  }
  else {
    res.redirect('login');
  }

});

module.exports = router;
