var express = require('express');
var router = express.Router();

/* GET computers page. */
router.get('/', function(req, res, next) {
    
    var rooms = ["307","329","255","234"];
    var buttonS = "<a href='/room/%room%'><button class='waves-effect waves-light btn'> Room %room% </button> </a> <br> <br>";
    var output = "";
    for (var i = 0; i < rooms.length; i++) {
        output += buttonS.replace("%room%", rooms[i]);   
    }
    
    
    res.render('computers', output);
});

module.exports = router;
