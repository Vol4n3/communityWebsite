"use strict";
// Server Express Setup
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var session = require("express-session");
// Socket.io setup
var io = require('socket.io').listen(server);
// MongoDb setup
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var MongoStore = require('connect-mongo')(session);
mongoose.connect("mongodb://localhost:27017/elemental");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var cookieParser = require("cookie-parser");

// Session Setup
var sessionConfig = session({
    secret: "changethisindev",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: db
    })
});
var sharedsession = require("express-socket.io-session");
app.use(sessionConfig);
io.use(sharedsession(sessionConfig, {
    autoSave: true
}));
app.use(function(req, res, next) {
    res.locals.currentUser = req.session.userId;
    next();
});
// parse incoming requests
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Static folder setup
app.use(express.static(__dirname + '/public'));
// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');



//Define Routes
var routes = require('./routes.js');
app.use('/', routes);

//launch the server on 8080
server.listen(8080, function() {
    console.log('server http launched');
});
var ioListener = require('./ioListener.js');
ioListener.use(io);
//tests
const Entity = require('./class/entity/Entity');
const User = require('./class/entity/User');

var e = new User();

var test = e.deserialize({pseudo : "test"});
console.log(test.pseudo);
