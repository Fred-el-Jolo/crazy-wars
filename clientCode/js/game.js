var host = 'crazy-wars-c9-fred-el-jolo.c9.io';
var port = '80';

CrazyWars.game = {
    newSession: function() {
        var username1 = $('#username1').val();
        var username2 = $('#username2').val();
        var url = "https://crazy-wars-c9-fred-el-jolo.c9.io/game?username1=" + username1 + "&username2=" + username2;
        $.ajax(url, {
            type: "GET",
            dataType: "json",
            context: this,
            success: function(data, textStatus) {
                //$('#debug-panel').html(JSON.stringify(data));
                this.document.location = 'session.html';
            },
            error: function(data, message){
                alert('Error : ' + data + ' - ' + message);
            }
        });
    },
};

// binding
$(document).ready(function() {
    $('#start-game-btn').click(function() {
        CrazyWars.game.newSession();
    });
});
