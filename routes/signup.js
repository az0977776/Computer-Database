var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
    res.render('signup', {route: "signup"});
});

module.exports = router;
