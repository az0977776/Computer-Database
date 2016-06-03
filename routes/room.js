var express = require('express');
var router = express.Router();
var database = require("../databaseModule.js");


/* GET room page. */
router.get('/:room', function(req, res, next) {
    
    database.init();
    var computers = database.getAllCompInRoom(req.params['room']);
    
    res.send(computers);


    res.render('room', req.params)

    
});

module.exports = router;
