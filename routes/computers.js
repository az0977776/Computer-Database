var express = require('express');
var router = express.Router();

/* GET computers page. */
router.get('/', function(req, res, next) {
    res.render('computers');
});

module.exports = router;