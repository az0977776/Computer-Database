var svg = document.getElementById("mysvg");

//how to read from database
var computers = [];
var databaseComp = [{"name":"cs101","os":"windows","date":"12-9-41","xcor":6,"ycor":6, "issue":2},{"name":"cs102","os":"windows","date":"12-9-41","xcor":0,"ycor":1, "issue":1},{"name":"cs111","os":"windows","date":"12-9-41","xcor":1,"ycor":1, "issue":0}];       

var Computer = function(CompDictionary) {
    
    var alertColors;//list of possible colors
    var xcor,ycor,height,width,alertColor,alert;
    
    alertColors = ["green","yellow","red"];
    
    alertColor = alertColors[0];//depends on alert type
    width = $(window).width()/8;//might depend on screen height
    height = $(window).width()/8;//might depend on screen height
    xcor = CompDictionary['xcor']*$(window).width();//depends on index in the grid
    ycor = CompDictionary['ycor']*$(window).width();//depends on index in the grid
    color = alertColors[CompDictionary['issue']];
    
    var comp = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    comp.setAttribute("x", xcor);
    comp.setAttribute("y", ycor);
    comp.setAttribute("width", width);
    comp.setAttribute("height", height);
    comp.setAttribute("fill", color);
    comp.setAttribute("stroke", "black");
    svg.appendChild(comp);
    
        return {
        xcor : xcor,
        ycor : ycor,
        width : width,
        height : height,
        alert : alert
    };
};

var AlertPop = function(){
    
    var xcor,ycor,height,width,alertColor,description;
    
}

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