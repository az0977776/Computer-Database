var express = require('express');
var router = express.Router();
var database = require("../databaseModule.js");


/* GET room page. */
router.get('/:room', function(req, res, next) {
    database.init();
    var databaseComp = database.getAllCompInRoom(req.params['room']);
    //console.log(req.params['room']);
    console.log('whoa');
    console.log(databaseComp);
    var output = req.params;
    output['computers'] = databaseComp;
    console.log(output['computers']);
    //res.send(output);
    res.render('room', output);
});

module.exports = router;
