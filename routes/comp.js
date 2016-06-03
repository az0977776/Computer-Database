var express = require('express');
var router = express.Router();

var app = express();

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
