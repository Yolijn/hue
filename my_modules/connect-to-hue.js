'use strict';
let hueJay = require('huejay');
const USERNAME = "93a6cc168ba90f1bf7f2a410fae0a7";

exports.hue = hueJay;

// Discover Ip
exports.lightsOn = function(to){
hueJay.discover()
	.then(function(bridges){
		let firstIp = bridges[0]["ip"];
		console.log(`Detected first Ip: ${firstIp}`)
		return firstIp;
	})
	.then(function(firstIp){
		// Set up client
		let client = new hueJay.Client({
			"host": firstIp,
			"username": USERNAME
		});

		// Test connection
		client.bridge.ping()
		  .then(function(){
		    console.log('Successful connection');
		  })
		  .catch((error) => {
		  	console.log('Could not connect');
		  })

		client.lights.getAll()
			.then(function(lights){
				let lightIds = [];
				for (let light of lights){
					lightIds.push(light.id);
				}
					return lightIds;
			})
		
		client.groups.getById(2)
			.then(function(group){
				group.on = to;
				return client.groups.save(group);
			})
	})
};