var express = require('express');
var router = express.Router();

var app = express();
var database = require("../databaseModule.js");
/* GET room page. */

var requestDictionary={};

var prevRoom,prevCompid,prevIpAddr,prevType,prevOS,prevInstallDate,prevLastupdated,prevWorking,prevDescript,prevXcor,prevYcor,prevIssue;

router.get('/:name', function(req, res, next) {

    requestDictionary = req.params;
    

    database.getComp(req.params['name'], function(data){
        
        prevRoom=data[0]["room"];
        prevCompid=data[0]["computerID"];
        prevIpAddr=data[0]["ip"];
        prevXcor=data[0]['xcor'];
        prevYcor=data[0]['ycor'];
        prevType=data[0]['type'];
        prevInstallDate=data[0]['installation'];
        prevOS=data[0]['os'];
        prevLastupdated=data[0]['updated'];
        prevDescript=data[0]['description'];
        prevWorking=data[0]['working'];
        prevIssue=data[0]['issue'];

        req.params["room"]=prevRoom;
        req.params["compid"]=prevCompid;
        req.params["ip"]=prevIpAddr;
        req.params["type"]=prevType;
        req.params["os"]=prevOS;
        req.params["install"]=prevInstallDate;
        req.params["updated"]=prevLastupdated;
        req.params["descript"]=prevDescript;

        
        res.render('comp', requestDictionary);
    });
    
    console.log(prevRoom);
    

    //var mysql      = require('mysql');
    //var connection = mysql.createConnection({
    //    host     : 'localhost',
    //    user     : 'user',
    //    password : 'pass',
    //    database : 'labs'
    //});
    //connection.connect();
    console.log(req.params,"po",prevRoom);


    //connection.end();
});

router.post('/:name', function(req, res, next) {
    

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
    
    var xcor=prevXcor;
    var issue=prevIssue;
    var ycor=prevYcor;

    var roomcheck = /[\d]/;
    var compidcheck = /cslab[\d]*-[\d]+/;
    var ipcheck = /[\d].[\d].[\d].[\d]/;
    var datecheck = /[\d]+-[\d]+-[\d]+/;
    var whiteSpaceCheck= /\s*/;

    if(!roomcheck.test(room)){
        requestDictionary['error']="Error: Room not in correct format! e.g. 312 ";
        res.render('comp', requestDictionary);
    }
    else if(!compidcheck.test(compid)){
        requestDictionary['error']="Error: Computer ID not in correct format! e.g. 'cslab1-5'";
        res.render('comp', requestDictionary);
    }
    else if(!ipcheck.test(ipAddr)){
        requestDictionary['error']="Error: IP Address not in correct format! e.g. 149.89.150.100";
        res.render('comp', requestDictionary);
    }
    else if(!datecheck.test(installDate)&&installDate!='null'){
        requestDictionary['error']="Error: Install Date format incorrect! e.g. 2009-10-31";
        res.render('comp', requestDictionary);
    }
    else if(!datecheck.test(lastupdated)&&lastupdated!='null'){
        requestDictionary['error']="Error: Update Date format incorrect! e.g. 2009-10-31";
        res.render('comp', requestDictionary);
    }
    else if(working==undefined){
        requestDictionary['error']="Error: Working Not Defined";
        res.render('comp', requestDictionary);
    }
    else{
        if(whiteSpaceCheck.test(type)){
            type=prevType;
        }
        
        if(whiteSpaceCheck.test(os)){
            os=prevOS;
        }
        
        if(whiteSpaceCheck.test(descript)){
            descript=prevDescript;
        }
        
        requestDictionary['error']="Computer updated!";
        database.updateComp(room,compid,ipAddr,xcor,ycor,type,os,installDate,lastupdated,working,issue,descript);
        res.render("comp",requestDictionary);
    }
});
module.exports = router;
