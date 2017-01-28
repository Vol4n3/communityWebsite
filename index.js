"use strict";
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/elemental");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(server);
server.listen(8080, function() {
    console.log('server http launched');
});