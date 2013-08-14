var requirejs = require('./lib/r.js');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});


requirejs(['model/map', 'server'],function(Map, Server) {
	// start game
	var m = new Map(15, 10);
	console.log("cell n°100 : "+m.getCellN(100).type);

	// start server
	Server.start();
});