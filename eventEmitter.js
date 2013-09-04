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
            var result;
            var actions = this.events[event];
            if (actions){
                for (var i = 0; i < actions.length; i++) {
                    result = actions[i].call(this, obj.data);
                    obj.fn.call(this, result);
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