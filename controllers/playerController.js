define(['eventEmitter', 'model/player'],function(eventEmitter, Player) {
    eventEmitter.on('initializePlayer', function(args){
        var username = args.username;
        
        var player = new Player(username);

        this.status = 200;
        this.message = 'Player initialized';
        this.result = player;
    });
});