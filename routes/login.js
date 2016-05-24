var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.passwordc);
  if (req.body.password != req.body.passwordc) {
    res.render('login', {error: "Password and Confirm Password Do Not Match!"});
  }
  // INSERT DATABASE CODE HERE
  res.render('login');
});

module.exports = router;
