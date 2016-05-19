var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : 'pass',
  database : 'labs'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

//Creates database and table if not already made
connection.query('CREATE DATABASE IF NOT EXISTS labs', function (err) {
    if (err) throw err;
    console.log('created db');
    connection.query('USE labs', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS comps('
            + 'room INT NOT NULL,'
            + 'computerID INT NOT NULL,'
            + 'xcor INT NOT NULL,'
            + 'ycor INT NOT NULL,'
            + 'type VARCHAR(25),'
            + 'OS VARCHAR(25),'
            + 'installation DATE,'
            + 'updated DATE,'
            + 'working CHAR(1),'
            + 'issueLevel INT,'
            + 'description VARCHAR(100),'
            + 'PRIMARY KEY (computerID)'
            +  ')', function (err) {
                if (err) throw err;
            });
    });
});


//functions to add
//add comp, delete comp, update comp, get all comp?, get all comps in a room, get comp with issuelevel


//Adds computer to table. computerID is unique
var addComp = function(room, computerID, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
  connection.query('INSERT INTO comps SET ?', {room:room, computerID:computerID, xcor:xcor, ycor:ycor, type:type, OS:OS, installation:installation, updated:updated, working:working, issueLevel:issueLevel, description:description}, function(err){
    if (err) throw err;
    console.log('Added computer');
  });
};

//addComp(333,55,1,2,"lenovo","linux","2012-01-15","2013-02-16","Y",0,"monitor is broken");

//Delete computer by ID
var deleteComp = function(computerID){
  connection.query('DELETE FROM comps WHERE computerID = ?', [computerID], function (err, res){
    if (err) throw err;
    console.log('Deleted ' + res.affectedRows + ' rows');
  });
};

//deleteComp(12);

//updates computer data
var updateComp = function(room, computerID, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
  connection.query('UPDATE comps SET room = ?, xcor = ?, ycor = ?, type = ?, OS = ?, installation = ?, updated = ?, working = ?, issueLevel = ?, description = ? WHERE computerID = ? ', [room, xcor, ycor, type, OS, installation, updated, working, issueLevel, description, computerID], function(err){
    if (err) throw err;
    console.log('Updated computer ' + computerID);
  });
};

//updateComp(45555,55,122,2555,"lo","lux","2012-01-28","2013-12-16","N",2," poop on it");

//Gets all computers
var getAllComp = function(){
  connection.query('SELECT * FROM comps', function(err,res){
    if (err) throw err;
    console.log('Data of all computers:\n');
    console.log(res)
  });
};

getAllComp();

//Gets all computers in a room
var getAllCompInRoom = function(room){
  connection.query('SELECT * FROM comps WHERE room = ?', [room], function(err, res){
    if (err) throw err;
    console.log('Data for all computers in room ' + room + '\n');
    console.log(res);
  });
};

//getAllCompInRoom(321);

//Gets all computers with specified issue level
var getIssues = function(issueLevel){
  connection.query('SELECT * FROM comps WHERE issueLevel = ?', [issueLevel], function(err, res){
    if (err) throw err;
    console.log('Data for all computers with issue level ' + issueLevel + '\n');
    console.log(res);
  });
};

//getIssues(2);


