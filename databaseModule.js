var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'computers',
  password : 'Uf7EZ262MtLDUmWc',
  database : 'labs'
});

module.exports = {
  // Initialize connection for use
  init : function() {
    connection.connect(function(err) {
      if (err) {
        //console.error('error connecting: ' + err.stack);
      }
      //console.log('connected as id ' + connection.threadId);
    });

    //Creates database and table if not already made
    connection.query('CREATE DATABASE IF NOT EXISTS labs', function (err) {
        if (err) throw err;
        //console.log('created db');
        connection.query('USE labs', function (err) {
            if (err) throw err;
            connection.query('CREATE TABLE IF NOT EXISTS comps('
                + 'room INT,'
                + 'computerID VARCHAR(100),'
                + 'ip VARCHAR(20),'
                + 'xcor INT,'
                + 'ycor INT,'
                + 'type VARCHAR(10000),'
                + 'OS VARCHAR(10000),'
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
  //Parameters:
  //room int, computerID string, ip string, xcor int, ycor int, type string, OS string, installation string, updated string, working string, issueLevel int, description string
  //Returns if computer is added or it already exists
  addComp : function(room, computerID, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
    connection.query('SELECT * FROM comps WHERE computerID = ? OR ip = ?', [computerID,ip], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        connection.query('INSERT INTO comps SET ?', {room:room, computerID:computerID, ip:ip, xcor:xcor, ycor:ycor, type:type, OS:OS, installation:installation, updated:updated, working:working, issueLevel:issueLevel, description:description}, function(err){
          if (err) throw err;
          //console.log('Added computer');
        });
      }
      else{
        //console.log('Computer already exists');
      }
    });
  },


  // Delete computer by ID
  //Parameters:
  //computerID string
  //Returns if row is changed
  deleteComp : function(computerID){
    connection.query('DELETE FROM comps WHERE computerID = ?', [computerID], function (err, res){
      if (err) throw err;
      console.log('Deleted ' + res.affectedRows + ' rows');
    });
  },


  // Updates computer data
  //Parameters:
  //room int, computerID string, ip string, xcor int, ycor int, type string, OS string, installation string, updated string, working string, issueLevel int, description string
  //Returns updated computerID
  updateComp : function(room, computerID, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
    connection.query('UPDATE comps SET room = ?, ip = ?, xcor = ?, ycor = ?, type = ?, OS = ?, installation = ?, updated = ?, working = ?, issueLevel = ?, description = ? WHERE computerID = ? ', [room, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description, computerID], function(err){
      if (err) throw err;
    });
  },

  //Check if computer exists
  //Parameters:
  //computerID string
  //returns boolean
  compExists : function(computerID,callback){
    connection.query('SELECT * FROM comps WHERE computerID = ?', [computerID], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        callback(false);
      } else{
        callback(true);
      }
    });
  },

  //Get data for a computer
  //Parameter:
  //computerID string
  //Return dictionary of data of computer
  getComp : function(computerID, callback){
    connection.query('SELECT * FROM comps WHERE computerID = ?', [computerID], function(err,res){
      if (err) throw err;
      callback(res);
    });
  },

  //Gets all computers
  //Returns dictionary of all computer data
  getAllComp : function(callback){
    connection.query('SELECT * FROM comps', function(err,res){
      if (err) throw err;
      //console.log('Data of all computers:\n');
      callback.log(res);
    });
  },


  //Gets all computers in a room
  //Returns dictionary of all computer data in a room
  getAllCompInRoom : function(room, callback){
    connection.query('SELECT * FROM comps WHERE room = ?', [room], function(err, res){
      if (err) throw err;
      //console.log('Data for all computers in room ' + room + '\n');
      //console.log(res);
      callback(res);
    });
  },


  // Gets all computers with specified issue level
  //Returns dictionary of all computer data with a issue
  getIssues : function(issueLevel, callback){
    connection.query('SELECT * FROM comps WHERE issueLevel = ?', [issueLevel], function(err, res){
      if (err) throw err;
      //console.log('Data for all computers with issue level ' + issueLevel + '\n');
      callback(res);
    });
  },

  //Gets all issues
  getAllIssues : function(callback){
    connection.query('SELECT * FROM comps WHERE issueLevel IS NOT null', function(err,res){
      if (err) throw err;
      //console.log('All issues:\n');
      //console.log(res)
      callback(res);
    });
  },

  //Add issues
  addIssues : function(computerID, issueLevel, issue){
    connection.query('UPDATE comps SET issueLevel = ?, description = ? WHERE computerID = ?', [issueLevel, issue, computerID], function(err){
    if (err) throw err;
    //console.log('Updated description for computer ' + computerID);
    });
  },

  //remove issues
  removeIssue : function(computerID){
    connection.query('UPDATE comps SET issueLevel = ?, description = ? WHERE computerID = ?', [null, '', computerID], function(err){
      if (err) throw err;
      //console.log('Removed issue');
    });
  },

  addCoord : function(computerID, x, y){
    connection.query('UPDATE comps set xcor = ?, ycor = ? WHERE computerID = ?', [x, y, computerID], function(err){
      if (err) throw err;
      //console.log('Updated coordinates for computer ' + computerID);
    });
  },

  // User database
  //Parameters:
  //user string, pass string
  //Returns if user is created or it exists
  addUser : function(user,pass){
    connection.query('SELECT * FROM users WHERE username = ?', [user], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        connection.query('INSERT INTO users SET ?', {username:user, password:pass}, function(err){
          if (err) throw err;
          //console.log('Added user ' + user);
        });
      }
      else{
        //console.log('User already exists');
      }
    });
  },

  //checks if a user exists
  //Parameter:
  //user string
  //returns boolean
  userExists : function(user,callback){
    connection.query('SELECT * FROM users WHERE username = ?', [user], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        //console.log('false');
        callback(false);
      } else{
        //console.log('true');
        callback(true);
      }
    });
  },

  // Testing purposes
  //gets all users
  //Returns dictionary of all users
  getAllUsers : function(callback){
    connection.query('SELECT * FROM users', function(err,res){
      if (err) throw err;
      callback(res);
    });
  },

  // authentication for logging
  //Parameter:
  //user string, pass string
  //returns boolean if user and pass match with db
  authenticate : function(user,pass,callback){
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [user,pass], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        callback(false);
      } else{
        callback(true);
      }
    });
  },

  // Adds note about a room
  //Parameters:
  //room int, notes string
  //Returns if note is added or it exists
  addRoomNote : function(room,notes){
    connection.query('SELECT * FROM classrooms WHERE roomNumber = ?', [room], function(err,res){
      if (err) throw err;
      if (res[0] == undefined){
        connection.query('INSERT INTO classrooms SET ?', {roomNumber:room, notes:notes},function(err){
          if (err) throw err;
          //console.log('Added note');
        });
      }
      else{
        //console.log('Room already has notes');
      }
    });
  },

  //gets all notes for a room
  //Parameter:
  //room int
  //Returns dictionary of notes
  getRoomNotes : function(room, callback){
    connection.query('SELECT * FROM classrooms WHERE roomNumber = ?', [room], function(err,res){
      if (err) throw err;
      callback(res);
    });
  },


  //deletes a room note
  //Parameter:
  //room string
  //Returns if data is deleted
  deleteRoomNote : function(room){
    connection.query('DELETE FROM classrooms WHERE roomNumber = ?', [room], function(err,res){
      if (err) throw err;
      //console.log('Deleted ' + res.affectedRows + ' rows');
    });
  },

  //updates note for room
  //Parameter:
  //room int, note string
  //Returns updated room
  updateRoomNote : function(room, note){
    connection.query('UPDATE classrooms SET note = ? WHERE roomNumber = ?', [note,room], function(err){
      if (err) throw err;
      //console.log('Updated note for room ' + room);
    });
  },

  //Resets table database
  reset : function(){
    connection.query('DROP TABLE comps');
    connection.query('DROP TABLE users');
    connection.query('DROP TABLE classrooms');
    //console.log('RESET TABLES');
  }
};
