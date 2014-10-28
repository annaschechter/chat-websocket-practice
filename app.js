var express = require('express');
var server = express();
var http = require('http').createServer(server);

server.get('/', function() {
	console.log('Hello world!')
});

http.listen(3000, function() {
	console.log("Listening to the port: 3000")
})