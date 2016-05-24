var express = require('express');
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', {route: "signup"});
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.passwordc);
  if (req.body.password != req.body.passwordc) {
    res.render('signup', {route: "signup", error: "Password and Confirm Password Do Not Match!"});
  }
  // INSERT DATABASE CODE HERE
  res.render('signup', {route: "signup"});
});

module.exports = router;
