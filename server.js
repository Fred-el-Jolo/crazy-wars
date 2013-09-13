/**
 * Define Server class
 */

define(['http', 'router'], function(http, router) {
	return {
		start: function() {
			http.createServer(function (request, response) {
				router.resolve(request, response);
			}).listen(8888);

			console.log("Server has started.");
		}
	};
});