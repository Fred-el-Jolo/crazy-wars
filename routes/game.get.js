define(['router', 'eventEmitter', 'url'], function(router, eventEmitter, url) {


	router.add("/game.get", function(oRequest, oResponse) {
        var oUrl = url.parse(oRequest.url, true);
        var params = oUrl.query;
        var username1 = params.username1;
        var username2 = params.username2;
        
        // init game session
        eventEmitter.fire('initializeGameSession', {
            data: {
                username1: username1,
                username2: username2
            },
            scope: {
                status: 0,
                message: '',
                result: null
            },
            fn: function() { // the callback called after event action execution
                oResponse.writeHead(200, {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                });
                oResponse.write(JSON.stringify(this.result));
                oResponse.end();
            }
        });
	});
	
    return null;
});