var espresso = require('express');
var app = espresso();
var port = 8080;
var bodyParser = require('body-parser');

app.use(bodyParser());

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.listen(port);
console.log("Listening on port ", port);