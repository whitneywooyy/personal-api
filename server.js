var espresso = require('express');
var app = espresso();
var port = 8080;
var bodyParser = require('body-parser');	// npm install --save body-parser

// USER DATA
var name = 'Whitney Woo';	
var location = {
	city: 'Provo',
	state: 'Utah'	
};
var	hobbies = ['Climbing', 'Coding', 'Cooking'];
var	occupations = ['social media', 'coder'];
var claimToFame = [
	{
		publication: 'Time',
		url: 'http://time.com/'
	},
	{
		publication: 'KSL',
		url: 'http://ksl.com/'
	}
];
var referenceNames = [
	{
	name: "Roger Rogerly"
	}	
];

app.use(bodyParser.json());	// Add in .json to convert everything to JSON

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/name', function(req, res){
	res.send(JSON.stringify({ "name": name }));
})
app.get('/location', function(req, res){
	res.send(JSON.stringify({ "location": location }));
})
app.put('/location', function(req, res){
	location = req.body;
	res.send(location);
})
app.get('/hobbies', function(req, res){
	if (req.query.order === "asc") {
		res.send(JSON.stringify({ 
			"hobbies": hobbies.sort() 
		}));
	} else if (req.query.order === "desc") {
		res.send(JSON.stringify({ 
			"hobbies": hobbies.sort().reverse() 
		}));
	} else {
		res.send(JSON.stringify({ 
			"hobbies": hobbies 
		}));
	}
})
app.get('/occupations', function(req, res){
	if (req.query.order === "asc") {
		res.send(JSON.stringify({ 
			"occupations": occupations.sort() 
		}));
	} else if (req.query.order === "desc") {
		res.send(JSON.stringify({ 
			"occupations": occupations.sort().reverse() 
		}));
	} else {
		res.send(JSON.stringify({ 
			"occupations": occupations 
		}));
	}
})
app.get('/occupations/latest', function(req, res){
	res.send(JSON.stringify({ "occupations": occupations.length-1}));
})
app.get('/mentions', function(req, res){
	res.send(JSON.stringify({ "claimToFame": claimToFame }));
})
app.post('/mentions', function(req, res){
	claimToFame.push(req.body);
	res.send(JSON.stringify({ "claimToFame": claimToFame }));
})
app.get('/references', function(req, res){
	res.send(JSON.stringify({ "references": references }));
})
app.post('/references', function(req, res){
	referenceNames.push(req.body);
	res.send(JSON.stringify({ "references": referenceNames }));
})


app.listen(port);
console.log("Listening on port ", port);