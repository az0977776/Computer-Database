# Computer Lab Overview

# Overview
Client: Mr. Dyrland-Weaver

We were assigned with the task of designing a way to keep track of the status of all the computers in school. CS teachers were to be able to view a grid of the computers in each room and view information about them, as well as view a list of all the computers with issues. They were also to be able to add notes that would be collectively viewed by all the teachers.


## Installation
NodeJS must have been installed prior to installing this. [Download Node](https://nodejs.org/en/download/)

Computer-Lab uses MySQL, and requires it to have been installed. [LAMP Stack](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu).

After ```make``` is run, PM2 will prompt the user to run a command as root. Copy and paste, and run the command exactly as it is. Finally, the server will now be running on port 3000. Use reverse proxy port forwarding to redirect traffic with either nginx/apache.

Installing the Project Itself:
```sh
git clone https://github.com/az0977776/Computer-Database.git ~/Computer-Database
cd ~/Computer-Database
make
```

## What we did
- Database for computer information, users, room notes
- CSS for website
- Script to get information about computers in the labs
- Grid of computers
- List of computer issues

## TODO
- Note Taking System for Rooms (Darwin)
- Add New Computers
- Darwin: Export database
- Darwin: Add function to get Issues by Room
- Franklin: Preload SSH Issues

## Installation Stuff
- Darwin: Export Database
- Young: Fully Test on Mac

## Team Roles
|Person         |Role           |
|---------------|---------------|
| Young Kim     |Leader/Frontend|
| Aaron Wang    |Frontend       |
| Darwin Chiu   |Backend        |
| Franklin Wang |Middleware     |
