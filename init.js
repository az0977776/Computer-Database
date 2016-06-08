var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'computers',
  password : 'Uf7EZ262MtLDUmWc'
});

connection.connect(function(err) {
  if (err) {
    //console.error('error connecting: ' + err.stack);
  }
  //console.log('connected as id ' + connection.threadId);
});

//Creates database and table if not already made
connection.query('CREATE DATABASE IF NOT EXISTS labs', function (err) {
    if (err) throw err;
    console.log('created db');
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