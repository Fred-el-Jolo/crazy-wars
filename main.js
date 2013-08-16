var requirejs = require('./lib/r.js'),
	fs = require('fs');



// must inspect routes before require's config
// and pass to require all the routes deps !
console.log("Loading routes...");

var deps = fs.readdirSync('routes');
for (var i = 0, ii = deps.length; i < ii; i++) {
	deps[i] = 'routes/' + deps[i].replace(/.js$/, "");
};



requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,
    deps: deps
});



requirejs(['model/map', 'server'],function(Map, Server) {
	// start game
	console.log("Creating new game...");
	var m = new Map(15, 10);

	// start server
	console.log("Starting server...");
	Server.start();
});