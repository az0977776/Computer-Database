var database = require('./databaseModule.js');

database.init();
database.addRoomNote(301,'it i freaking cold in here');
database.getRoomNotes(301);
database.addComp(301,36,'1.35.5.757',1,2,'lenovo','linux','02-13-2009','02-15-2016','Y',1,'i punched the screen by accident');
// database.updateComp(350,35,'1.35.65.757',1,2,'lenovo','linux','02-13-2009','02-15-2016','Y',1,'i punched the screen by accident');
database.getAllComp();
database.addUser('darwin','darwinchiu');
database.authenticate('darw','5');
database.getAllUsers();

//database.reset();
