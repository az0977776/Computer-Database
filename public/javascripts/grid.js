var svg = document.getElementById("mysvg");

//var databaseComp = [{"computerID":"cs101","os":"windows","date":"12-9-41","xcor":0,"ycor":0, "issue":2},{"computerID":"cs102","os":"windows","date":"12-9-41","xcor":0,"ycor":1, "issue":1},{"computerID":"cs111","os":"windows","date":"12-9-41","xcor":1,"ycor":1, "issue":0},{"computerID":"cs101","os":"windows","date":"12-9-41","xcor":2,"ycor":0, "issue":0},{"computerID":"cs102","os":"windows","date":"12-9-41","xcor":3,"ycor":0, "issue":1},{"computerID":"cs111","os":"windows","date":"12-9-41","xcor":1,"ycor":0, "issue":0},{"computerID":"cs102","os":"windows","date":"12-9-41","xcor":3,"ycor":1, "issue":0},{"computerID":"cs111","os":"windows","date":"12-9-41","xcor":2,"ycor":1, "issue":0}];
//var databaseComp = [{"room":307,"computerID":"cslab-132","ip":"149.89.150.132","xcor":6,"ycor":2,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-26","ip":"149.89.150.126","xcor":5,"ycor":7,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-24","ip":"149.89.150.124","xcor":5,"ycor":5,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-25","ip":"149.89.150.125","xcor":5,"ycor":6,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-8","ip":"149.89.150.108","xcor":0,"ycor":0,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-9","ip":"149.89.150.109","xcor":2,"ycor":2,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-20","ip":"149.89.150.120","xcor":3,"ycor":2,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-21","ip":"149.89.150.121","xcor":5,"ycor":2,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-22","ip":"149.89.150.122","xcor":5,"ycor":3,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-23","ip":"149.89.150.123","xcor":5,"ycor":4,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-2","ip":"149.89.150.102","xcor":0,"ycor":6,"type":"LENOVO","OS":"Linux version 3.13.0-32-generic (buildd@kissel) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #57-Ubuntu SMP Tue Jul 15 03:51:08 UTC 2014","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":"SSH Not Working"},{"room":307,"computerID":"cslab1-3","ip":"149.89.150.103","xcor":0,"ycor":5,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"homer","ip":"149.89.150.100","xcor":null,"ycor":null,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-1","ip":"149.89.150.101","xcor":0,"ycor":7,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-6","ip":"149.89.150.106","xcor":0,"ycor":2,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-7","ip":"149.89.150.107","xcor":0,"ycor":1,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-4","ip":"149.89.150.104","xcor":0,"ycor":4,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-5","ip":"149.89.150.105","xcor":0,"ycor":3,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":"asdf"},{"room":307,"computerID":"cslab1-27","ip":"149.89.150.127","xcor":6,"ycor":7,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-28","ip":"149.89.150.128","xcor":6,"ycor":6,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-29","ip":"149.89.150.129","xcor":6,"ycor":5,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-19","ip":"149.89.150.119","xcor":3,"ycor":3,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-18","ip":"149.89.150.118","xcor":3,"ycor":4,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-19) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #130-Ubuntu SMP Mon Apr 18 18:27:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-31","ip":"149.89.150.131","xcor":6,"ycor":3,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-30","ip":"149.89.150.130","xcor":6,"ycor":4,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-11","ip":"149.89.150.111","xcor":2,"ycor":4,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-10","ip":"149.89.150.110","xcor":2,"ycor":3,"type":"LENOVO","OS":"Linux version 3.13.0-32-generic (buildd@kissel) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #57-Ubuntu SMP Tue Jul 15 03:51:08 UTC 2014","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-13","ip":"149.89.150.113","xcor":2,"ycor":6,"type":"LENOVO","OS":"Linux version 3.13.0-36-generic (buildd@toyol) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #63-Ubuntu SMP Wed Sep 3 21:30:07 UTC 2014","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-12","ip":"149.89.150.112","xcor":2,"ycor":5,"type":"LENOVO","OS":"Linux version 3.13.0-85-generic (buildd@lgw01-32) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #129-Ubuntu SMP Thu Mar 17 20:50:15 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null},{"room":307,"computerID":"cslab1-15","ip":"149.89.150.115","xcor":3,"ycor":7,"type":"LENOVO","OS":"Linux version 3.13.0-86-generic (buildd@lgw01-51) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #131-Ubuntu SMP Thu May 12 23:33:13 UTC 2016","installation":null,"updated":null,"working":"Y","issueLevel":0,"description":null}]
var databaseComp;

var Computer = function(CompDictionary) {

    if (CompDictionary["issueLevel"] == null) {
        CompDictionary["issueLevel"] = 0;
    }
    
    if (CompDictionary["computerID"] == "homer") {
        CompDictionary["xcor"] = 0;
        CompDictionary["ycor"] = 8;
    }

    var issueColors = ["green","yellow","red"];//list of possible colors

    var width = $(window).width()/20;//might depend on screen height
    var height = $(window).width()/20;//might depend on screen height
    var xcor = CompDictionary['xcor']*($(window).width()/20 + 10);//depends on index in the grid
    var ycor = CompDictionary['ycor']*($(window).width()/20 + 10);//depends on index in the grid
    var color = issueColors[CompDictionary['issueLevel']];
    var name = CompDictionary['computerID'];
    var infoString = CompDictionary['computerID'];

    var compLink = document.createElementNS("http://www.w3.org/2000/svg", "a");
    compLink.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "/comp/" + CompDictionary['computerID']);

    var comp = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    comp.setAttribute("x", xcor + 5);
    comp.setAttribute("y", ycor + 5);
    comp.setAttribute("rx", 20);
    comp.setAttribute("ry", 20);
    comp.setAttribute("width", width);
    comp.setAttribute("height", height);
    comp.setAttribute("fill", color);
    comp.setAttribute("stroke", "black");
    comp.setAttribute("stroke-width", 5);
    comp.setAttribute("opacity", 0.7);
    comp.setAttribute("class", "tooltip");

    var compInfo = document.createElementNS("http://www.w3.org/2000/svg", "text");
    compInfo.setAttribute("class", "tooltiptext");
    compInfo.setAttribute("x",xcor + 15);
    compInfo.setAttribute("y",ycor + 30);
    compInfo.setAttribute("fill","black");
    compInfo.setAttribute("pointer-events","none");
    compInfo.innerHTML = infoString;

    compLink.appendChild(comp);
    compLink.appendChild(compInfo);
    svg.appendChild(compLink);

    return {
        xcor : xcor,
        ycor : ycor,
        width : width,
        height : height,
        alert : alert
    };
};

var populateRoom = function(){

    var newComp;
    //populate from the database
    for (var i = 0; i < databaseComp.length; i++) {
        console.log("loop");
        newComp = Computer(databaseComp[i]);
    }
};

populateRoom();