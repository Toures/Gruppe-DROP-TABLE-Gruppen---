#!/usr/bin/env node
var http = require('http');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Sie haben sich erfolgreich auf den WebServer mit der URL 127.0.0.1:1337 verbunden!');
	console.log('<User connected to server>');
}).listen(1337,'127.0.0.1');