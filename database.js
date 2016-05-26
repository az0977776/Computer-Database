var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : 'pass',
  database : 'labs'
});

// Initialize connection for use
var init = function() {
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
              + 'room INT,'
              + 'computerID INT,'
              + 'ip VARCHAR(20),'
              + 'xcor INT,'
              + 'ycor INT,'
              + 'type VARCHAR(25),'
              + 'OS VARCHAR(25),'
              + 'installation DATE,'
              + 'updated DATE,'
              + 'working CHAR(1),'
              + 'issueLevel INT,'
              + 'description VARCHAR(10000),'
              + 'PRIMARY KEY (computerID)'
              + ')', function (err) {
                  if (err) throw err;
              });
          connection.query('CREATE TABLE IF NOT EXISTS users('
              + 'username VARCHAR(15),'
              + 'password VARCHAR(15),'
              + 'PRIMARY KEY (username)'
              + ')', function(err) {
                  if (err) throw err;
              });
          connection.query('CREATE TABLE IF NOT EXISTS classrooms('
              + 'roomNumber INT,'
              + 'notes VARCHAR(10000)' 
              + ')', function (err) {
                if (err) throw err;
              });
      });
  });
};

// Adds computer to table. computerID is unique
var addComp = function(room, computerID, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
  connection.query('INSERT INTO comps SET ?', {room:room, computerID:computerID, ip:ip, xcor:xcor, ycor:ycor, type:type, OS:OS, installation:installation, updated:updated, working:working, issueLevel:issueLevel, description:description}, function(err){
    if (err) throw err;
    console.log('Added computer');
  });
};

// addComp(333,55,1,2,"lenovo","linux","2012-01-15","2013-02-16","Y",0,"monitor is broken");

// Delete computer by ID
var deleteComp = function(computerID){
  connection.query('DELETE FROM comps WHERE computerID = ?', [computerID], function (err, res){
    if (err) throw err;
    console.log('Deleted ' + res.affectedRows + ' rows');
  });
};

// deleteComp(12);

// Updates computer data
var updateComp = function(room, computerID, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
  connection.query('UPDATE comps SET room = ?, ip = ?, xcor = ?, ycor = ?, type = ?, OS = ?, installation = ?, updated = ?, working = ?, issueLevel = ?, description = ? WHERE computerID = ? ', [room, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description, computerID], function(err){
    if (err) throw err;
    console.log('Updated computer ' + computerID);
  });
};

// UpdateComp(45555,55,122,2555,"lo","lux","2012-01-28","2013-12-16","N",2," poop on it");

// Gets all computers
var getAllComp = function(){
  connection.query('SELECT * FROM comps', function(err,res){
    if (err) throw err;
    console.log('Data of all computers:\n');
    console.log(res);
  });
};

//getAllComp();

//Gets all computers in a room
var getAllCompInRoom = function(room){
  connection.query('SELECT * FROM comps WHERE room = ?', [room], function(err, res){
    if (err) throw err;
    console.log('Data for all computers in room ' + room + '\n');
    console.log(res);
  });
};

// getAllCompInRoom(321);

// Gets all computers with specified issue level
var getIssues = function(issueLevel){
  connection.query('SELECT * FROM comps WHERE issueLevel = ?', [issueLevel], function(err, res){
    if (err) throw err;
    console.log('Data for all computers with issue level ' + issueLevel + '\n');
    console.log(res);
  });
};

// getIssues(2);


// User database
var addUser = function(user,pass){
  connection.query('INSERT INTO users SET ?', {username:user, password:pass}, function(err){
    if (err) throw err;
    console.log('Added user ' + user);
  });
};

// Testing purposes
var getAllUsers = function(){
  connection.query('SELECT * FROM users', function(err,res){
    if (err) throw err;
    console.log(res);
  });
};

// Checks if a user exists
var userExists = function(user){
  connection.query('SELECT * FROM users WHERE username = ?', [user], function(err,res){
    if (err) throw err;
    if (res[0] == undefined){
      console.log('false');
      return false;
    } else{
      console.log('true');
      return true;
    }
  }); 
};

// authentication for logging
var authenticate = function(user,pass){
  connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [user,pass], function(err,res){
    if (err) throw err;
    console.log(res[0]);
    if (res[0] == undefined){
      console.log('false');
      return false;
    } else{
      console.log('true');
      return true;
    }
  });
};

// Adds note about a room
var addRoomNote = function(room,notes){
  connection.query('INSERT INTO classrooms SET ?', {roomNumber:room, notes:notes},function(err){
    if (err) throw err;
    console.log('Added note');
  });
};

var getRoomNotes = function(room){
  connection.query('SELECT * FROM classrooms WHERE roomNumber = ?', [room], function(err,res){
    if (err) throw err;
    console.log(res);
  });
};

var deleteRoomNote = function(room){
  connection.query('DELETE FROM classrooms WHERE roomNumber = ?', [room], function(err,res){
    if (err) throw err;
    console.log('Deleted ' + res.affectedRows + ' rows');
  });
};

connection.query('drop table comps');
connection.query('drop table users');
connection.query('drop table classrooms');
//init();
//userExists('darwin');
//addComp(301,33,'1.3.4.5665',1,3,'lenovo','linux','02-12-2003','03-15-2009','Y',1,'theres poop on it erhiureojhrtohi jrotij rthtioj htiojhtoi jhitoho rtjhirth rth');
//updateComp(555,33,'1.3.4.5665',1,3,'lenovo','linux','02-12-2003','03-15-2009','Y',1,'theres poop on it');
//deleteComp(33);
//getAllComp();
//addUser('darwin','darwinchiu');
//authenticate('dain','darwiu');
//getAllUsers();
//addRoomNote(301,'this room smells like poop');
//deleteRoomNote(301);
//getRoomNotes(301);

