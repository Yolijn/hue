'use strict';

let connect = require('./my_modules/connect-to-hue');
let express = require('express');
let app = express();

app.use(express.static('public'));


let lightsOn = function(){
	connect.lightsOn(true);
};

let lightsOff = function(){
	connect.lightsOn(false);
};

app.post('/on', function(req, res){
	lightsOn();
	res.send('Lights are On!');
});
app.post('/off', function(req, res){
	lightsOff();
	res.send('Lights are Off!');
});

app.listen(8080);
