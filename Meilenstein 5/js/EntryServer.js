#!/usr/bin/env node
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.text());

app.get('/player_entry', function(req,res) {
	console.log(req.body);
});
	
var server = app.listen(1337, function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('NodeJS Server running, accepting \'GET\' on localhost:1337/player_entry');
});