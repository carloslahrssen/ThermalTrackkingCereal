const io = require('socket.io-client');
const python = require('python-shell');

const socket = io.connect('placeholderurl', {reconnect:true});

socket.on('connect', (socket)=>{
	console.log("Connected");
	shell.on("message", (data)=>{
		socket.emit('temp',{temp:data});
	});
});

console.log('Live');

