/**
 * Define Router class
 */

define(function() {

	// attributes
	var Router = function() {
		// routes
		this.routes = {};
	};

	//methods
	Router.prototype = {
		add: function(sUri, fn) {
			this.routes[sUri] = fn;
		},
		resolve: function(oUrl) {
			// TODO : la querystring de oUrl devra être passée sous forme de paramètres 
			// à la fonction déclenchée
			var fn = this.routes[oUrl.pathname];

			if(typeof fn === "function")
				fn.call(this, []);
			/*else
				console.log("router : no route for this pathname");*/
		}
	};

	return new Router();
});