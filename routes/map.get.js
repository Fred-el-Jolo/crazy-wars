define(['router', 'eventEmitter'], function(router, eventEmitter) {


	router.add("/map.get", function(oRequest, oResponse) {
		eventEmitter.fire('generateMap', {
            data: {
                'id':'99'
            }, 
            fn: function(result) { // the callback called after event action execution
                oResponse.writeHead(200, {"Content-Type": "text/plain"});
                oResponse.write("Here's your map : ["+ result + "]");
                oResponse.end();
            }
        });      
	});
	
    return null;
});