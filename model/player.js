/**
 * Define Player class
 */

define(function() {	
	
	// attributes
	var Player = function() {
		this.id = null;
		this.settings = null;
    	this.username = null;
    	this.units = [];
    	this.score = 0;
    	this.status = null;
	}

    // methods
    Player.prototype = {
        
	};

	return Player;
});