var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url = require('url');

// generated pages
var routes = require('./routes/index');
var users = require('./routes/users');

// manually added
var login = require('./routes/login');
var signup = require('./routes/signup');
var issues = require('./routes/issues');
var addcomp = require('./routes/addcomp');
var removecomp = require('./routes/removecomp');
var computers = require('./routes/computers');
var room = require('./routes/room');
var comp = require('./routes/comp');
var edit = require('./routes/edit');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// sessions
var session = require("client-sessions");
app.use(session({
  cookieName: 'session',
  secret: 'applekim.thunderbird',
  duration: 30 * 60 * 1000, // idle time until logout
  activeDuration: 5 * 60 * 1000, // updates time until logout
}));

// generated
app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/signup', signup);
app.use('/issues', issues);
app.use('/computers', computers);
app.use('/room', room);
app.use('/comp', comp);
app.use('/edit', edit);
app.use('/addcomp', addcomp);
app.use('/removecomp', removecomp);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	    message: err.message,
	    error: err
	});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
	message: err.message,
	error: {}
    });
});

module.exports = app;
