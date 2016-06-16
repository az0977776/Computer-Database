var express = require('express');
var router = express.Router();

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  var database = require('../databaseModule.js');
  database.init();
  if (req.session.username) {
    res.render('removecomp');
  }
  else {
    res.redirect('login');
  }
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  
    var database = require('../databaseModule.js');
    database.init();
    database.compExists(req.body.id, function(message){
      console.log("MESSAGE: " + message);
      if (message == true) {
        database.deleteComp(req.body.id);
        res.render('removecomp', {error: "Computer Removed Successfully!"});
      }
      else {
        res.render('removecomp', {error: "Error: Selected Computer Does Not Exist!"});
      }
    });
});

module.exports = router;
