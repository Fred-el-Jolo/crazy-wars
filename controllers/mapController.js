define(['eventEmitter', 'model/map'],function(eventEmitter, Map) {
    eventEmitter.on('generateMap', function(args){
        var height = args.height;
        var width = args.width;

        if(!height || !width)
        	return;

        var map = new Map(width, height);

        return map.getJson();
    });
});