/**
 * Define Server class
 */

define(['http', 'router'], function(http, router) {
	return {
		start: function() {
			http.createServer(function (request, response) {
				router.resolve(request, response);
				/*response.writeHead(200, {"Content-Type": "text/plain"});
				response.write("Hello crazy wars World");
				response.end();*/
			}).listen(process.env.PORT);

			console.log("Server has started.");
		}
	};
});