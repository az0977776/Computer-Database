var svg = document.getElementById("mysvg");

//how to read from database

var Room = function() {
    var numComps = 0;
    var roomNum = 0;
    var computers = [];//grid of computers
    
    
};

var Computer = function() {
    
    var alertColors;//list of possible colors
    var xcor,ycor,height,width,alertColor,alert;
    
    alertColors = ["009900","e6b800","cc0000"];//green,yellow,red
    
    alertColor = alertColors[0];//depends on alert type
    width = window.width * 0.01;//might depend on screen height
    height = window.height * 0.01;//might depend on screen height
    xcor = 0;//depends on index in the grid
    ycor = 0;//depends on index in the grid
    
    
    var comp = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    comp.setAttribute("x", xcor);
    comp.setAttribute("y", ycor);
    comp.setAttribute("width", width);
    comp.setAttribute("height", height);
    comp.setAttribute("fill", alertColor);
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
  // [{"name":"cs101","os":"windows","date":"12-9-41","xcor":0,"ycor":0},{"name":"cs102","os":"windows","date":"12-9-41","xcor":0,"ycor":1}]
  
};