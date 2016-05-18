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
                console.log('created table');
            });
    });
});

//Adds computer to table. computerID is unique
var addComp = function(room, computerID, xcor, ycor, type, OS, installation, updated, working, issueLevel, description){
  connection.query('INSERT INTO comps SET ?', {room:room, computerID:computerID, xcor:xcor, ycor:ycor, type:type, OS:OS, installation:installation, updated:updated, working:working, issueLevel:issueLevel, description:description}, function(err, res){
    if (err) throw err;
    console.log(res);
  });
};

//addComp(321,12,1,2,"lenovo","linux","2012-01-15","2013-02-16","Y",2,"monitor is broken");

//add comp, delete comp, update comp, get all comp?, get all comps in a room, get all broken comp, get comp with issuelevel, 


// connection.query(
//   'UPDATE comps SET name = ? Where ID = ?',
//   ["darwin", 1],
//   function (err, result) {
//     if (err) throw err;

//     console.log('Changed ' + result.changedRows + ' rows');
//   }
// );

// connection.query(
//   'DELETE FROM comps WHERE working = ?',
//   ["Y"],
//   function (err, result) {
//     if (err) throw err;

//     console.log('Deleted ' + result.affectedRows + ' rows');
//   }
// );

connection.query('SELECT * FROM comps',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});