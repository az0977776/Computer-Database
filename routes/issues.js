var express = require('express');
var router = express.Router();

/* GET issues page. */
router.get('/', function(req, res, next) {
    res.render('issues');
});

module.exports = router;
