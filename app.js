const io = require('socket.io-client');
const python = require('python-shell');
const shell = new python('cereal.py',{mode:'text'});

const socket = io.connect('https://thermalapi-yfrisqmrsa.now.sh', {reconnect:true});


socket.on('connect', ()=>{
	console.log("Connected");
	shell.on("message", (data)=>{
		console.log(data);
		socket.emit('temp',{temp:data});
	});
});

console.log('Live');

