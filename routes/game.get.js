define(['router', 'eventEmitter', 'url'], function(router, eventEmitter, url) {


	router.add("/game.get", function(oRequest, oResponse) {
        eventEmitter.fire('initializeGameSession', {
            fn: function() { // the callback called after event action execution
                console.log("callback initializeGameSession");
                console.log("    -> player1 : "+this.players.player1);
                console.log("    -> player2 : "+this.players.player2);
            },
            data: {
                a: 1
            }, 
            scope: {
                players: {
                    player1: null,
                    player2: null
                }
            }
        });      
	});
	
    return null;
});