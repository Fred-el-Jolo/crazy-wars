var requirejs = require('./lib/r.js');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['model/infantry'],function(Infantry) {
	var monInfanterie = new Infantry();
	console.log("sight : "+monInfanterie.sight);
});