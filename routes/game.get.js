define(['router', 'eventEmitter', 'url'], function(router, eventEmitter, url) {


	router.add("/game.get", function(oRequest, oResponse) {
        eventEmitter.fire('initializeGameSession', {
            fn: function() { // the callback called after event action execution
                // add some code
            },
            data: {}, 
            scope: {}
        });      
	});
	
    return null;
});