
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var embraceRehab = {

	chatHistory : [],

}

app.use(express.static('public'));
app.get('/msg', function(req, res) {
  res.send(embraceRehab);
  console.log(embraceRehab.chatHistory);
});

http.listen(5000, function(){
  console.log('-- port open @ port 5000 --');
  console.log('------- | Your IP address is: ; | -------');
  console.log(' ');
  console.log(' Server address on');
});

// // WebSocket Portion
var clients = [];


// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', 
	// We are given a websocket object in our function
	function (socket) {
	

		console.log("We have a new client: " + socket.id);
		
		socket.on('peerid', function(data) {
			//io.sockets.emit("peerid", data);
			socket.broadcast.emit('peerid', data);

			for (var c = 0; c < clients.length; c++) {
				socket.emit('peerid',clients[c]);
			}

		});

		socket.on('drawing', function(data) {
			io.sockets.emit("drawing", data);
		});

		socket.on('chat message', function(msg){

		var chatMessage = {
			role : msg.role,
			text : msg.text,
			broadcast : msg.broadcast
		}

		embraceRehab.chatHistory.push(chatMessage);

		if(embraceRehab.chatHistory.length > 15){
			embraceRehab.chatHistory.shift();
		}

		console.log(embraceRehab.chatHistory);

    	socket.broadcast.emit('chat message', msg);

  		});

  		// socket.on('todo', function(msg){
  		// console.log(msg);
    // 	socket.broadcast.emit('todo', msg);
  		// });

	}
);


