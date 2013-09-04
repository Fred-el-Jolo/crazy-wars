define(['eventEmitter'],function(eventEmitter) {
    eventEmitter.on('generateMap', function(args){
        var id = 'fuckingNull';
        if (args && args.id){
            id = args.id;
        }
        
        return id + '_generated';
    });
});