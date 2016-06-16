var express = require('express');
var router = express.Router();

var app = express();
var database = require("../databaseModule.js");

var requestDictionary = {};

/* GET room page. */
router.get('/', function(req, res, next) {
    if(req.session.username){
  res.render('addcomp');
    }
    else{
        res.redirect('login');
    }
});

router.post('/', function(req, res, next) {
    var compid = req.body.id;
    var room = req.body.room;
    var xcor = req.body.xcor;
    var ycor = req.body.ycor;
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
    var datecheck = /[\d]+-[\d]+-[\d]+/;
    var whiteSpaceCheck= /\s*/;

    if(!roomcheck.test(room)){
        requestDictionary['error']="Error: Room not in correct format! e.g. 312 ";
        res.render('addcomp', requestDictionary);
    }
    else if(!roomcheck.test(xcor)){
        requestDictionary['error']="Error: X-Coordinate not in correct format! e.g. 0 ";
        res.render('addcomp', requestDictionary);
    }
    else if(!roomcheck.test(ycor)){
        requestDictionary['error']="Error: Y-Coordinate not in correct format! e.g. 1 ";
        res.render('addcomp', requestDictionary);
    }
    else if(!ipcheck.test(ipAddr)){
        requestDictionary['error']="Error: IP Address not in correct format! e.g. 149.89.150.100";
        res.render('addcomp', requestDictionary);
    }
    else if(!datecheck.test(installDate)&&installDate!='null'){
        requestDictionary['error']="Error: Install Date format incorrect! e.g. 2009-10-31";
        res.render('addcomp', requestDictionary);
    }
    else if(!datecheck.test(lastupdated)&&lastupdated!='null'){
        requestDictionary['error']="Error: Update Date format incorrect! e.g. 2009-10-31";
        res.render('addcomp', requestDictionary);
    }
    else{
        if(installDate == 'null') installDate = "0000-00-00";
        if(lastupdated == 'null') installDate = "0000-00-00";
        database.addComp(room,compid,ipAddr,xcor,ycor,type,os,installDate,lastupdated,1,working,descript);
        requestDictionary['error']="Computer Added!";
        res.render("addcomp",requestDictionary);
    }
});
module.exports = router;
