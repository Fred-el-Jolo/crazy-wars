define(['router', 'fs'], function(router, fs) {

	router.add("/.get", function(oRequest, oResponse) {
        fs.readFile('clientCode/index.html', function (err, page) {
            if (err) {
                throw err; 
            }       
            oResponse.writeHead(200, {"Content-Type": "text/html"});  
            oResponse.write(page);  
            oResponse.end();
        });
    });
	
    return null;
});