var express = require('express');
var router = express.Router();
//var database = require("./database");


/* GET room page. */
router.get('/:room', function(req, res, next) {
    
     //var output = ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="400" height="180">'
     //import functions from grid.js and database.js
    
    console.log(req.params);
    
     
    res.render('room', req.params)
    
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
