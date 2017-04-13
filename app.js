var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

var port = 3000;
var server = app.listen(port, function(req, res) {
	console.log('Website up and running at http://localhost' + port);
});
