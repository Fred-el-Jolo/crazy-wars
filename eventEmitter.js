/**
 * Define Server class
 */

//define(['events'],function(events) {
define(function() {
    // attributes
	var EventEmitter = function() {
		this.events = {};
	};
    
    // methods
	EventEmitter.prototype = {
		
		fire : function(event, obj) {
            var actions = this.events[event],
                scope = obj.scope || {},
                datas = obj.data || {},
                result;

            if (actions){
                for (var i = 0; i < actions.length; i++) {
                    result = actions[i].call(scope, datas);
                    
                    if(obj.fn && typeof obj.fn === "function")
                        obj.fn.call(scope, result);
                }
            }
		},
		
		on : function(event, action) {
		    if (!this.events[event]){
                this.events[event] = [];
            }
            this.events[event].push(action);
		}
	
	};
    
    return new EventEmitter();
    
});