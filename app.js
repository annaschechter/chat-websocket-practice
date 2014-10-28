var express = require('express');
var server = express();
var http = require('http').createServer(server);
var io = require('socket.io')(http);
expressLayouts = require('express-ejs-layouts')

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));
server.use(expressLayouts)
server.set('layout', 'layout')


server.get('/', function(req, res) {
	res.render('index')
});

// io.on('connection', function(socket){
// 	console.log('a user connected');
// 	socket.on('disconnect', function(){
// 		console.log('a user disconnected');
// 	});
// });

io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		console.log('message:' + msg)
	});
});

http.listen(3000, function() {
	console.log("Listening to the port: 3000")
});