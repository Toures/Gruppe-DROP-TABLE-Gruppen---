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

   fs.appendFile('form.txt', input, function (err) {
   	if (err) throw err;
      });

	console.log(input);
	res.writeHead(200, {'Content-Type': 'text/plain'});
            
	res.send(req.body);
	});
});

app.get('/AllPlayers', function(req,res){
	fs.readFile("data.json",'utf8', function(err, data){
		if(err) throw err;

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
					 "_id"           : jSonArray[i]._id,
                    "isActive"      : jSonArray[i].isActive,
                    "isFavorite"    : jSonArray[i].isFavorite,
                    "year"          : jSonArray[i].year,
                    "number"        : jSonArray[i].number,
                    "firstname"     : jSonArray[i].firstname,
                    "surname"       : jSonArray[i].surname,
                    "headcoach"     : jSonArray[i].headcoach,
                    "asisstantcoach": jSonArray[i].asisstantcoach,
                    "team"          : jSonArray[i].team,
                    "position"      : jSonArray[i].position

				});
			}
		}
		res.end(JSON.stringify(favoriteJson));
	});

});


var server = app.listen(1337, function() {
	console.log('NodeJS Server running, accepting \'POST\' on localhost:1337/player_entry');
});