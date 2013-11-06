define(['eventEmitter', 'model/gameSession'],function(eventEmitter, GameSession) {
    
    // Initialize the game session
    eventEmitter.on('initializeGameSession', function(args){
        
        var username1 = args.username1;
        var username2 = args.username2;
        var session = new GameSession();
        
        // Init player 1 attributes
        eventEmitter.fire('initializePlayer', {
            data: {
        		settings: null,
            	username: username1
            },
            scope: {
                status: 0,
                message: '',
                result: null
            },
            fn: function() { // the callback called after event action execution
                session.addPlayer(this.result);
            }
        });
        
        // Init player 2 attributes
        eventEmitter.fire('initializePlayer', {
            data: {
        		settings: null,
            	username: username2
            },
            scope: {
                status: 0,
                message: '',
                result: null
            },
            fn: function() { // the callback called after event action execution
                session.addPlayer(this.result);
            }
        });
        
        // Init map
        eventEmitter.fire('generateMap', {
            data: {
                height: 10,
                width: 10
            },
            scope: {
                status: 0,
                message: '',
                result: null
            },
            fn: function() { // the callback called after event action execution
                session.setMap(this.result);
            }
        });
        
        this.status = 200;
        this.message = 'Game initialized';
        this.result = session;
    });
});