var express = require('express');
var router = express.Router();
var database = require("../databaseModule.js");


/* GET room page. */
router.get('/:room', function(req, res, next) {
    database.init();
    database.getAllCompInRoom(req.params['room'], function(data){
        var i;
        for (i = 0; i < data.length; i++) {
            data[i] = JSON.stringify(data[i]);
        }
        var output = req.params;
        
        var tempArray = [];
        var tempString = "[";
        
        var k;
        for (k = 0; k < data.length; k++) {
            tempArray.push(data[k]);
        }

        var j;
        for (j = 0; j < tempArray.length; j++) {
            tempString += tempArray[j];
            tempString += ", ";
        }
        tempString+= "]";
        //console.log(tempString);
        
        output['computers'] = tempString;
        res.render('room', output);
    });
});

module.exports = router;
