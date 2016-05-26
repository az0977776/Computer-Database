var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : 'pass',
  database : 'labs'
});

module.exports = {
  // Initialize connection for use
  init : function() {
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
                + 'description VARCHAR(10000)'
                + ')', function (err) {
                    if (err) throw err;
                });
            connection.query('CREATE TABLE IF NOT EXISTS users('
                + 'username VARCHAR(15),'
                + 'password VARCHAR(15)'
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
  },
  
  // Adds computer to table. computerID is unique
  addComp : function(room, computerID, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
    connection.query('SELECT * FROM comps WHERE computerID = ? OR ip = ?', [computerID,ip], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        connection.query('INSERT INTO comps SET ?', {room:room, computerID:computerID, ip:ip, xcor:xcor, ycor:ycor, type:type, OS:OS, installation:installation, updated:updated, working:working, issueLevel:issueLevel, description:description}, function(err){
          if (err) throw err;
          console.log('Added computer');
        });
      }
      else{
        console.log('Computer already exists');
      }
    });
  },
  
  
  // Delete computer by ID
  deleteComp : function(computerID){
    connection.query('DELETE FROM comps WHERE computerID = ?', [computerID], function (err, res){
      if (err) throw err;
      console.log('Deleted ' + res.affectedRows + ' rows');
    });
  },
  
  
  // Updates computer data
  updateComp : function(room, computerID, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
    connection.query('UPDATE comps SET room = ?, ip = ?, xcor = ?, ycor = ?, type = ?, OS = ?, installation = ?, updated = ?, working = ?, issueLevel = ?, description = ? WHERE computerID = ? ', [room, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description, computerID], function(err){
      if (err) throw err;
      console.log('Updated computer ' + computerID);
    });
  },
  
  
  // Gets all computers
  getAllComp : function(){
    connection.query('SELECT * FROM comps', function(err,res){
      if (err) throw err;
      console.log('Data of all computers:\n');
      console.log(res);
    });
  },
  
  
  //Gets all computers in a room
  getAllCompInRoom : function(room){
    connection.query('SELECT * FROM comps WHERE room = ?', [room], function(err, res){
      if (err) throw err;
      console.log('Data for all computers in room ' + room + '\n');
      console.log(res);
    });
  },
  
  
  // Gets all computers with specified issue level
  getIssues : function(issueLevel){
    connection.query('SELECT * FROM comps WHERE issueLevel = ?', [issueLevel], function(err, res){
      if (err) throw err;
      console.log('Data for all computers with issue level ' + issueLevel + '\n');
      console.log(res);
    });
  },
  
  
  // User database
  addUser : function(user,pass){
    connection.query('SELECT * FROM users WHERE username = ?', [user], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        connection.query('INSERT INTO users SET ?', {username:user, password:pass}, function(err){
          if (err) throw err;
          console.log('Added user ' + user);
        });
      }
      else{
        console.log('User already exists');
      }
    });
  },
  
  // Testing purposes
  getAllUsers : function(){
    connection.query('SELECT * FROM users', function(err,res){
      if (err) throw err;
      console.log(res);
    });
  },
  
  // authentication for logging
  authenticate : function(user,pass){
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
  },
  
  // Adds note about a room
  addRoomNote : function(room,notes){
    connection.query('SELECT * FROM classrooms WHERE roomNumber = ?', [room], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        connection.query('INSERT INTO classrooms SET ?', {roomNumber:room, notes:notes},function(err){
          if (err) throw err;
          console.log('Added note');
        });
      }
      else{
        console.log('Room already has notes');
      }
    });
  },
  
  getRoomNotes : function(room){
    connection.query('SELECT * FROM classrooms WHERE roomNumber = ?', [room], function(err,res){
      if (err) throw err;
      console.log(res);
    });
  },
  
  deleteRoomNote : function(room){
    connection.query('DELETE FROM classrooms WHERE roomNumber = ?', [room], function(err,res){
      if (err) throw err;
      console.log('Deleted ' + res.affectedRows + ' rows');
    });
  },
  
  updateRoomNote : function(room, note){
    connection.query('UPDATE classrooms SET note = ? WHERE roomNumber = ?', [note,room], function(err){
      if (err) throw err;
      console.log('Updated note for room ' + room);
    });
  },
  
  reset : function(){
    connection.query('DROP TABLE comps');
    connection.query('DROP TABLE users');
    connection.query('DROP TABLE classrooms');
    console.log('reset tables');
  }
};


