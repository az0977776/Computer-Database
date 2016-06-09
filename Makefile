all:
	cd ~
	wget https://nodejs.org/dist/v4.4.5/node-v4.4.5.tar.gz
	mkdir node
	tar xvf node-v*.tar.?z --strip-components=1 -C ./node
	cd ~
	rm -rf node-v*
	mkdir node/etc
	echo 'prefix=/usr/local' > node/etc/npmrc
	sudo mv node /opt/
	sudo chown -R root: /opt/node
	sudo ln -s /opt/node/bin/node /usr/local/bin/node
	sudo ln -s /opt/node/bin/npm /usr/local/bin/npm
	sudo npm install pm2 -g
	cd ~
	pm2 start ~/Computer-Database/bin/www
	pm2 startup ubuntu
	echo "COPY AND PASTE AND RUN THE COMMAND SHOWN IN PM2 IN THE LINE ABOVE"
	npm install
	mysql -u root -p -e "CREATE USER 'computers'@'localhost' IDENTIFIED BY 'Uf7EZ262MtLDUmWc'; GRANT ALL PRIVILEGES ON * . * TO 'computers'@'localhost'; FLUSH PRIVILEGES;"
	node init.js
	mysql -u root -p labs < labs.sql;
