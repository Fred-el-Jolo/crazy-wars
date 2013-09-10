/**
 * Define Map class
 */

define(['model/mapCell'], function(MapCell) {

	// attributes
	var Map = function(width, height) {
		this.width = width;
		this.height = height;
		this.cells = [];

		this.generateEmptyMap();
	}

	// methods
	Map.prototype = {
		generateEmptyMap: function() {
			for (var i = 0, ii = this.width * this.height; i < ii; i++) {
				this.cells[i] = new MapCell(i);
			}
		},

		getCellXY: function(x, y) {
			return this.cells[x*y];
		},

		getCellN: function(n) {
			return this.cells[n];
		},

		getJson: function() {
			var obj = {
				map: []
			};

			for (var i = 0, ii = this.cells.length; i < ii; i++) {
				obj.map.push({
					n: i,
					type: this.cells[i].type
				});
			}

			return obj;
		}
	};

	return Map;
});