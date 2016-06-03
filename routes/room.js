var express = require('express');
var router = express.Router();
var database = require("../databaseModule.js");


/* GET room page. */
router.get('/:room', function(req, res, next) {
    database.init();
    database.getAllCompInRoom(req.params['room'], function(data){
        console.log('whoa');
        console.log(req.params['room']);
        console.log(data[0]);
        console.log(data[0]['OS']);
        var output = req.params;
        output['computers'] = data;
        res.render('room', output);
    });
});

module.exports = router;
