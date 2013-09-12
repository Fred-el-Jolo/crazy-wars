/**
 * Define GameSession class
 */

define(function() {

	// attributes
	var GameSession = function(width, height) {
		this.id = 0;
		this.players = [];
		this.map = null;
	}

	// methods
	GameSession.prototype = {
		
		// Initialize the game session
		initialize: function() {
		
		    // Initialise GameEngine
			
			// Initialise Settings
			
			// Initialise Players
			
			
		},

		getCellXY: function(x, y) {
			return this.cells[x*y];
		},

		getCellN: function(n) {
			return this.cells[n];
		}
	};

	return GameSession;
});