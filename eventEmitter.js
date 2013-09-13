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
                datas = obj.data || {};

            if (actions){
                for (var i = 0; i < actions.length; i++) {
                    actions[i].call(scope, datas);
                    
                    if(obj.fn && typeof obj.fn === "function")
                        obj.fn.call(scope);
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