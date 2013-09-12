/**
 * Define Server class
 */

define(['http', 'router'], function(http, router) {
	return {
		start: function() {
			http.createServer(function (request, response) {
				router.resolve(request, response);
			}).listen(process.env.PORT);

			console.log("Server has started.");
		}
	};
});