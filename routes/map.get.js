define(['router', 'eventEmitter', 'url'], function(router, eventEmitter, url) {


	router.add("/map.get", function(oRequest, oResponse) {
        var oUrl = url.parse(oRequest.url, true);
        var params = oUrl.query;
        var height = params.h;
        var width = params.w;

        if(!width || !height) {
            oResponse.writeHead(400, "Height and width are mandatories parameters.");
            oResponse.end();
            return;
        }

        eventEmitter.fire('generateMap', {
            data: {
                height: height,
                width: width
            }, 
            fn: function(result) { // the callback called after event action execution
                oResponse.writeHead(200, {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                });
                oResponse.write(JSON.stringify(result));
                oResponse.end();
            }
        });      
	});
	
    return null;
});