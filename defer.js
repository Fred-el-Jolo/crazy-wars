/*
 * Define Defer class
 * usage : create a new instance of Defer with an array of flags strings and a callback function
 * when all flags are true (use fulfill), callback function is called
 */

define(function () {
	var Defer = function(flags, fn, scope) {
		this.flags = {};
		this.fn = fn;
		this.scope = scope || this;

		for(var i=0, ii=flags.length; i<ii; i++)
			this.flags[flags[i]] = false;
	};
		
	Defer.prototype = {
		fulfill: function(flag) {
			this.flags[flag] = true;
			var exec = true;
			for(var i in this.flags) {
				if(this.flags[i] === false)
					exec = false;
			}

			if(exec)
				this.fn.call(this.scope);
		}
	};

	return Defer;
});