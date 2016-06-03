var express = require('express');
var router = express.Router();
//var database = require("./database");

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

/* GET room page. */
router.get('/:name', function(req, res, next) {
    
    var requestDictionary = req.params; 
    requestDictionary['message'] = 'grabbing data from database';
    
    res.render('comp', requestDictionary)
    
    //var mysql      = require('mysql');
    //var connection = mysql.createConnection({
    //    host     : 'localhost',
    //    user     : 'user',
    //    password : 'pass',
    //    database : 'labs'
    //});
    //connection.connect();


    //connection.end();
});

module.exports = router;
