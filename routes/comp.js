var express = require('express');
var router = express.Router();
//var database = require("./database");


/* GET room page. */
router.get('/:name', function(req, res, next) {
    
    console.log(req.params);
    
    
     
    res.render('comp', req.params)
    
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
