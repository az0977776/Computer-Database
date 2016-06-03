var svg = document.getElementById("mysvg");
var database = require("../databaseModule.js");


//how to read from database
var computers = [];
var databaseComp = [{"name":"cs101","os":"windows","date":"12-9-41","xcor":0,"ycor":0, "issue":2},{"name":"cs102","os":"windows","date":"12-9-41","xcor":0,"ycor":1, "issue":1},{"name":"cs111","os":"windows","date":"12-9-41","xcor":1,"ycor":1, "issue":0},{"name":"cs101","os":"windows","date":"12-9-41","xcor":2,"ycor":0, "issue":0},{"name":"cs102","os":"windows","date":"12-9-41","xcor":3,"ycor":0, "issue":1},{"name":"cs111","os":"windows","date":"12-9-41","xcor":1,"ycor":0, "issue":0},{"name":"cs102","os":"windows","date":"12-9-41","xcor":3,"ycor":1, "issue":0},{"name":"cs111","os":"windows","date":"12-9-41","xcor":2,"ycor":1, "issue":0}];

var getDatabase = function(room) {
    database.init();
    var databaseComp = database.getAllCompInRoom(room);
}

var Computer = function(CompDictionary) {

    var issueColors = ["green","yellow","red"];//list of possible colors

    var width = $(window).width()/15;//might depend on screen height
    var height = $(window).width()/15;//might depend on screen height
    var xcor = CompDictionary['xcor']*($(window).width()/15 + 10);//depends on index in the grid
    var ycor = CompDictionary['ycor']*($(window).width()/15 + 10);//depends on index in the grid
    var color = issueColors[CompDictionary['issue']];
    var name = CompDictionary['name'];
    var infoString = CompDictionary['name'];

    var compLink = document.createElementNS("http://www.w3.org/2000/svg", "a");
    compLink.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "/comp/" + CompDictionary['name']);

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

var populateRoom = function(room){
  //goes through database and create a room object with computers
  getDatabase(room);
  var newComp;
  //populate from the database
  for (var i = 0; i < databaseComp.length; i++) {
      newComp = Computer(databaseComp[i]);
      computers.push(newComp);
  }

};

