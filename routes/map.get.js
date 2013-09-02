define(['router'], function(router) {


	router.add("/map.get", function(oRequest, oResponse) {
		console.log("map.get : YEAH !!! Here's the map !");
        console.log("METHOD : " + oRequest.method);
        console.log("URL : " + oRequest.url);
        oResponse.writeHead(200, {"Content-Type": "text/plain"});
        oResponse.write("Here's your map : []");
        oResponse.end();
	});

    
	return null;
});