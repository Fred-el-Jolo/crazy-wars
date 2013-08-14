/**
 * Define Infantry class, inherits from Unit
 */

define(['model/unit'], function(Unit) {	
	
	// attributes
	var Infantry = function() {
		this.id      = "infantry";
		this.sight   = 5;
		this.range   = 5;
		this.move    = 3;
		this.life    = 3;
		this.attack  = 2;
		this.defense = 2;
    }

    // methods inheritance
    Infantry.prototype = Object.create(Unit.prototype);

	return Infantry;
});