/**
 * Define Router class
 */

define(['url'], function(url) {

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
		resolve: function(oRequest, oResponse) {
		    var oUrl = url.parse(oRequest.url);
            var oRoute = oUrl.pathname + '.' + oRequest.method.toLowerCase();
            var fn = this.routes[oRoute];

            if (!fn){
                if (oRoute.indexOf('/lib/') >= 0 || oRoute.indexOf('/js/') >=0 || oRoute.indexOf('/images/') >=0){
    			    fn = this.routes['/static-ressource.get'];
    			}
            }
			
			if(typeof fn === "function"){
				fn.call(this, oRequest, oResponse);
				console.log("router : access on route " + oRoute);
			}
		}
	};

	return new Router();
});