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

app.put('/Player', function(req, res){

	var writeToFile = req.body.vorname + ', ' + req.body.name + ", " + req.body.jahrgang + ', ' + req.body.coach + ', ' + 
		req.body.asisstantcoach + ', ' + req.body.position + ', ' + req.body.number + '\n';

		fs.appendFile('form.txt', input, function(err){
			if(err) throw err;
		});
		res.end("Player hinzugefügt!");
});

app.get('/AllPlayers', function(req,res){
	fs.readFile("data.json",'utf8', function(err, data){
		if(err) throw err;
		res.writeHead(200, {'Content-Type':'application/json'});
		res.header({'Access-Control-Allow-Origin':'*'});
		res.end(data);
	})

});
	
app.get('/Favorites', function(req, res){
	fs.readFile("data.json", 'utf8', function (err, data){
		if(err) throw err;

		var favoriteJson = [];
		var arrayJson = JSON.parse(data);

		for(var i = 0; i<arrayJson.length; i++){
			if(arrayJson[i].isFavorite){
				favoriteJson.push({
						"_id"           : arrayJson[i]._id,
         			"isActive"      : arrayJson[i].isActive,
                 	"isFavorite"    : arrayJson[i].isFavorite,
                 	"year"          : arrayJson[i].year,
             		"number"        : arrayJson[i].number,
                	"firstname"     : arrayJson[i].firstname,
                	"surname"       : arrayJson[i].surname,
                	"headcoach"     : arrayJson[i].headcoach,
                	"asisstantcoach": arrayJson[i].asisstantcoach,
                 	"team"          : arrayJson[i].team,
                	"position"      : arrayJson[i].position

				});
			}
		}
		res.writeHead(200, {'Content-Type':'application/json'});
		res.header({'Access-Control-Allow-Origin':'*'});
		res.end(JSON.stringify(favoriteJson));
	});

});



var server = app.listen(1337, function() {
	console.log('NodeJS Server running, accepting \'POST\' on localhost:1337/player_entry');
});