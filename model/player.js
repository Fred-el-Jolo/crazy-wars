/**
 * Define Player class
 */

define(function() {	
	
	// attributes
	var Player = function(username) {
		this.id = null;
		this.settings = null;
    	this.username = username;
    	this.units = [];
    	this.score = 0;
    	this.status = null;
	}

    // methods
    Player.prototype = {
        getUsername: function() {
			return this.username;
		}
	};

	return Player;
});