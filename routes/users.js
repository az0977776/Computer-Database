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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
