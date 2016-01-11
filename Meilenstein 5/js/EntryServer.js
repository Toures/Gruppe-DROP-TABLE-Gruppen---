#!/usr/bin/env node
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var qs = require('querystring');

app.use(express.static(path.resolve(__dirname,'../')));

app.post('/player_entry', function(req,res) {
	var body = '';
	//Event Handling
	req.on('data', function (data) {
		body += data;
		});

	req.on('end', function () {
	var post = qs.parse(body);
	var input = post.vorname + ' ' + post.name + ', ' + post.jahrgang + ', ' + post.coach + ', ' +
                post.assistentencoach + ', ' + post.position + ", " + post.trikotnummer + '\n';
   res.writeHead(301, {Location: 'http://127.0.0.1:1337/html/player_entry.html'});
	res.end();

   fs.appendFile('form.txt', input, function (err) {
   	if (err) throw err;
      });

	console.log(input);
	});
});
	
var server = app.listen(1337, function() {
	console.log('NodeJS Server running, accepting \'POST\' on localhost:1337/player_entry');
});