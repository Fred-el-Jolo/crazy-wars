/**
 * Define Server class
 */

define(['http', 'url', 'router'], function(http, url, router) {
	return {
		start: function() {
			http.createServer(function (request, response) {
				router.resolve(url.parse(request.url));

				response.writeHead(200, {"Content-Type": "text/plain"});
				response.write("Hello crazy wars World");
				response.end();
			}).listen(8888);

			console.log("Server has started.");
		}
	};
});