define(['eventEmitter'],function(eventEmitter) {
    
	// Initialize the game session
    //  - Initialise GameEngine
	//  - Initialise Players & settings
    eventEmitter.on('initializeGameSession', function(args){

    	eventEmitter.fire('newPlayer1', {
    		fn: function() {
    			console.log("player 1 is created ? "+this.players.player1);
    		},
    		scope: this
    	});

    	eventEmitter.fire('newPlayer2', {
    		fn: function() {
    			console.log("player 2 is created ? "+this.players.player2);
    		},
    		scope: this
    	});

    });

    eventEmitter.on('newPlayer1', function() {
    	this.players.player1 = "Player 1";
    });

    eventEmitter.on('newPlayer2', function() {
    	this.players.player2 = "Player 2";       
    });
});