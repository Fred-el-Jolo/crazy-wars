/**
 * Define MapCell class
 */

define(function() {
	
	// attributes
	var MapCell = function(x, y, type) {
		this.n = x*y; // hex number
		this.type = type;
	};

	//method
	MapCell.prototype = {

	};

	return MapCell;
});