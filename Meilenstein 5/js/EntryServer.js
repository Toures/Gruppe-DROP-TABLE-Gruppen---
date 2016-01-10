#!/usr/bin/env node
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var qs = require('querystring');

app.use(express.static(path.resolve(__dirname,'../')));

app.post('/player_entry', function(req,res) {
	console.log("Hello!");
	
	var body = '';
	req.on('data', function (data) {
		body += data;
		});

	req.on('end', function () {
	var post = qs.parse(body);
	var writeToFile = post.vorname + ' ' + post.name + ', ' + post.jahrgang + ', ' + post.coach + ', ' +
                post.assistentencoach + ', ' + post.position + ", " + post.trikotnummer + '\n';

   fs.appendFile('form.txt', writeToFile, function (err) {
   	if (err) throw err;
      });
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
            
	res.send(req.body);
	});
});
	
var server = app.listen(1337, function() {
	console.log('NodeJS Server running, accepting \'GET\' on localhost:1337/player_entry');
});