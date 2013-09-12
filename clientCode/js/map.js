CrazyWars.map = {
    canvas: null,
    context: null,
    
    trace: function() {
        this.canvas = this.canvas || $("#map")[0];
        this.context = this.context || this.canvas.getContext("2d");
        
        this.hex(0, 0);
    },
    
    // assuming x and y are the no of hex
    hex: function(x, y) {
        var ctx = this.context;
        var CS30 = Math.cos(Math.PI/6);
        
        ctx.beginPath();
        ctx.moveTo(x, y+1);
        ctx.lineTo(x+1-CS30, y);
        ctx.lineTo(x+1+CS30, y);
        ctx.lineTo(x+2, y+1);
        ctx.lineTo(x+1+CS30, y+2);
        ctx.lineTo(x+1-CS30, y+2);
        ctx.closePath();
        
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;    
        ctx.stroke();
    }
};

// exec
CrazyWars.map.trace();