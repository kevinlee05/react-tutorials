var express = require('express');
var app = express();

var connections = [];
var title = 'Untitled Presentation';

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

    socket.once('disconnect', function(){
        //when a socket disconnects, remove it from the connections array
        connections.splice(connections.indexOf(socket), 1);
        //disconnect the socket
        socket.disconnect();
        console.log("%s disconnected: %s sockets remaining.", socket.id, connections.length);
    });

    socket.emit('welcome', {
        title: title // this object becomes serverstate on the client
    });

    //add the socket to the ceonnections array
    connections.push(socket);
    console.log("New socket %s connected. Total %s sockets connected", socket.id, connections.length);
});

console.log("Polling server is running at http://localhost:3000")
