/**
 * Define Unit class
 */

define(function() {
	
	// attributes
	var Unit = function(config) {
		
		// identification
		this.id      = ""; // String

		// unit properties
		this.sight   = 0;  // int
		this.range   = 0;  // int
		this.move    = 0;  // int
		this.life    = 0;  // int
		this.attack  = 0;  // int
		this.defense = 0;  // int

		// unit position
		this.position     = 0;  // int, hex number
		
	    this.action = null;
	};

	//methods
	Unit.prototype = {
		move: function(dest) {},
		shoot: function(target) {},
		moveAndShoot: function(dest, target) {}
	};

	return Unit;
	
});