all:
	cd ~
	sudo apt-get install node
	sudo apt-get install npm
	sudo npm install pm2 -g
	cd ~
	pm2 start ~/Computer-Database/bin/www
	pm2 startup ubuntu
	echo "COPY AND PASTE AND RUN THE COMMAND SHOWN IN PM2 IN THE LINE ABOVE"
	npm install
	mysql -u root -p -e "CREATE USER 'computers'@'localhost' IDENTIFIED BY 'Uf7EZ262MtLDUmWc'; GRANT ALL PRIVILEGES ON * . * TO 'computers'@'localhost'; FLUSH PRIVILEGES;"
	node init.js
	mysql -u root -p labs < labs.sql;
