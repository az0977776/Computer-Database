all:
	npm install
	mysql -u root -p -e "CREATE USER 'computers'@'localhost' IDENTIFIED BY 'Uf7EZ262MtLDUmWc'; GRANT ALL PRIVILEGES ON * . * TO 'computers'@'localhost'; FLUSH PRIVILEGES;"
	node init.js
	mysql -u root -p labs < labs.sql;
