var svg = document.getElementById("mysvg");

//how to read from database
var computers = [];
var databaseComp = [{"name":"cs101","os":"windows","date":"12-9-41","xcor":0,"ycor":0, "issue":2},{"name":"cs102","os":"windows","date":"12-9-41","xcor":0,"ycor":1, "issue":1},{"name":"cs111","os":"windows","date":"12-9-41","xcor":1,"ycor":1, "issue":0},{"name":"cs101","os":"windows","date":"12-9-41","xcor":2,"ycor":0, "issue":0},{"name":"cs102","os":"windows","date":"12-9-41","xcor":3,"ycor":0, "issue":1},{"name":"cs111","os":"windows","date":"12-9-41","xcor":1,"ycor":0, "issue":0},{"name":"cs102","os":"windows","date":"12-9-41","xcor":3,"ycor":1, "issue":0},{"name":"cs111","os":"windows","date":"12-9-41","xcor":2,"ycor":1, "issue":0}];

var Computer = function(CompDictionary) {

    var issueColors = ["green","yellow","red"];//list of possible colors

    var width = $(window).width()/15;//might depend on screen height
    var height = $(window).width()/15;//might depend on screen height
    var xcor = CompDictionary['xcor']*($(window).width()/15 + 10);//depends on index in the grid
    var ycor = CompDictionary['ycor']*($(window).width()/15 + 10);//depends on index in the grid
    var color = issueColors[CompDictionary['issue']];
    var name = CompDictionary['name'];
    var infoString = CompDictionary['name'] + "" + CompDictionary['os'];

    var compLink = document.createElementNS("http://www.w3.org/2000/svg", "a");
    compLink.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "/comp/" + CompDictionary['name']);

    var comp = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    comp.setAttribute("x", xcor + 5);
    comp.setAttribute("y", ycor + 5);
    comp.setAttribute("width", width);
    comp.setAttribute("height", height);
    comp.setAttribute("fill", color);
    comp.setAttribute("stroke", "black");
    //comp.setAttribute("style", "fill:" + color + ";stroke:black;stroke-width:5;opacity:0.5");
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
  //goes through database and create a room object with computers
  var newComp;
  //populate from the database
  for (var i = 0; i < databaseComp.length; i++) {
      newComp = Computer(databaseComp[i]);
      computers.push(newComp);
  }

};

populateRoom();
