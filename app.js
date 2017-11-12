const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

console.log('Live');

io.on('connection',(socket)=>{
	
});
