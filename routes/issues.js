var express = require('express');
var router = express.Router();

/* GET issues page. */
router.get('/', function(req, res, next) {
    res.render('issues',
      {issues: [
       {"name": "cslab-1-9", "description": "it's not broken", "level": 0},
       {"name": "cslab-1-10", "description": "it's broken", "level": 1},
       {"name": "cslab-1-11", "description": "it's def broken", "level": 2}
     ]});
});

module.exports = router;
