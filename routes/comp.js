var express = require('express');
var router = express.Router();

var app = express();
var database = require("../databaseModule.js");
/* GET room page. */
console.log('ho');
router.get('/:name', function(req, res, next) {

    var requestDictionary = req.params;
    
    res.render('comp', requestDictionary);

    
    //var mysql      = require('mysql');
    //var connection = mysql.createConnection({
    //    host     : 'localhost',
    //    user     : 'user',
    //    password : 'pass',
    //    database : 'labs'
    //});
    //connection.connect();


    //connection.end();
});

router.post('/:name', function(req, res, next) {
    
    console.log(req.body.room);
    console.log(req.body.compid);
    console.log(req.body.ipaddr);
    console.log(req.body.type);
    console.log(req.body.os);
    console.log(req.body.installdate);
    console.log(req.body.lastupdated);
    console.log(req.body.working);
    console.log(req.body.descript);

    database.getComp(req.params['name'], function(data){
        console.log(data);

    });
    //document.getElementById('room').setAttribute('value', 'lol');
    var room = req.body.room;
    var compid = req.body.compid;
    var ipAddr = req.body.ipaddr;
    var type = req.body.type;
    var os = req.body.os;
    var installDate = req.body.installdate;
    var lastupdated = req.body.lastupdated;
    var working = req.body.working;
    var descript = req.body.descript;
    
    var roomcheck = /[\d]/;
    var compidcheck = /cslab[\d]*-[\d]+/;
    var ipcheck = /[\d].[\d].[\d].[\d]/;
    var datecheck = /[\d]-[\d]-[\d]/;
    
    if(!roomcheck.test(room)){
        res.render('comp', {error: "Error: Room not in correct format! e.g. 312 "});
    }
    else if(!compidcheck.test(compid)){
        res.render('comp', {error: "Error: Computer ID not in correct format! e.g. 'cslab1-5'"});
    }
    else if(!ipcheck.test(ipAddr)){
        res.render('comp', {error: "Error: IP Address not in correct format! e.g. 149.89.150.100"});
    }
    else if(!datecheck.test(installDate)){
        res.render('comp', {error: "Error: Install Date format incorrect! e.g. 2009-10-31"});
    }
    else if(!datecheck.test(lastupdated)){
        res.render('comp', {error: "Error: Update Date format incorrect! e.g. 2009-10-31"});
    }
    else if(working==undefined){
        res.render('comp', {error: "Error: Working Not Defined"});
    }
    else{
        var xcor,ycor = 0;
        var issue = 0
        database.updateComp(room,compid,ipAddr,xcor,ycor,type,os,installDate,lastupdated,working,issue,descript);
    }
});

module.exports = router;
