var express = require('express');
var router = express.Router();

/* GET computers page. */
router.get('/', function(req, res, next) {
    
    var rooms = ["307","329","255","234"];
    
    res.render('computers', {"rooms": rooms});
});

module.exports = router;
