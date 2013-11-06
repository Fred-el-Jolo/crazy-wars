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