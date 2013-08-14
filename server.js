define(['http', 'url'], function(http, url) {
	return {
		start: function() {
			http.createServer(function (request, response) {
				console.log(request.url);

				response.writeHead(200, {"Content-Type": "text/plain"});
				response.write("Hello crazy wars World");
				response.end();
			}).listen(8888);

			console.log("Server has started.");
		}
	};
});