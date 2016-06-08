var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'computers',
  password : 'Uf7EZ262MtLDUmWc',
  database : 'labs'
});

connection.query("SELECT room, computerID, ip, xcor, ycor, type, OS, installation, updated, working, issueLevel, description FROM comps INTO OUTFILE 'comps.csv' FIELDS ENCLOSED BY '"' LINES TERMINATED BY ';' ESCAPED BY '"' LINES TERMINATED BY '\r\n'");