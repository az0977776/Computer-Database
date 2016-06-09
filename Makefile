all:
	curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
	sudo apt-get install -y nodejs
	npm install
	mysql -u root -p -e "CREATE USER 'computers'@'localhost' IDENTIFIED BY 'Uf7EZ262MtLDUmWc'; GRANT ALL PRIVILEGES ON * . * TO 'computers'@'localhost'; FLUSH PRIVILEGES;"
	node init.js
	mysql -u root -p labs < labs.sql;
	sudo npm install pm2 -g
	pm2 start bin/www
	pm2 startup ubuntu
	echo "COPY AND PASTE AND RUN THE COMMAND SHOWN IN PM2 IN THE LINE ABOVE"
