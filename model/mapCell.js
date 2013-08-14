/**
 * Define MapCell class
 */

define(function() {
	
	// attributes
	var MapCell = function(n, type) {
		this.n = n; // hex number
		this.type = type || "plain";
	};

	//method
	MapCell.prototype = {

	};

	return MapCell;
});