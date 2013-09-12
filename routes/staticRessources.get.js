define(['url', 'router', 'fs'], function(url, router, fs) {

	router.add("/static-ressource.get", function(oRequest, oResponse) {
        var oUrl = url.parse(oRequest.url);
        var oRoute = oUrl.pathname + '.' + oRequest.method.toLowerCase();
        var pattern = /(.*)\.get/;
        var match = pattern.exec(oRoute);
        if (match && match.length > 0){
            var path = match[1];
            console.log('path=' + path);
            fs.readFile('clientCode' + path, function (err, page) {
                if (err) {
                    throw err;
                }       
                oResponse.writeHead(200, {"Content-Type": "application/javascript"});  
                oResponse.write(page);  
                oResponse.end();
            });    
        }
    });

    return null;
});