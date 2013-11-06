/**
 * Define GameSession class
 */

define(function() {

	// attributes
	var GameSession = function() {
		this.sessionId = 0;
		this.playersId = 0;
		this.players = [];
		this.map = null;
	}

	// methods
	GameSession.prototype = {
		
		// Initialize the game session
		addPlayer: function(player) {
		    if (player){
		        player.id = this.playersId;
		        this.players.push(player);
		        this.playersId++;
		    }
		},
		setMap: function(map) {
			this.map = map;
		}
	};

	return GameSession;
});