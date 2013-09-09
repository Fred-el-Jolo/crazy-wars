CrazyWars.map = {
    canvas: null,
    context: null,
    hexes: [],
    scale: 1,
    
    trace: function(id, scale) {
        this.canvas = $("#"+id)[0];
        this.context = this.canvas.getContext("2d");
        if(scale)
            this.scale = scale;
        
        var SIN60 = Math.sin(Math.PI/3);

        for(var j=0; j<5; j++) {
            for(var i=0; i<10; i++) {
                this.hex(i*1.5, (j*Math.sqrt(3))+(i%2==0?0:SIN60), this.scale);
            }
        }

        // bind a listener
        $("#"+id).click(this, function(oEvent) {
            var me = oEvent.data;
            console.log(me.getHex(oEvent.offsetX, oEvent.offsetY));
        })
    },
    
    // assuming x and y are the no of hex
    hex: function(x, y) {
        var ctx = this.context;
        var SIN60 = Math.sin(Math.PI/3);
        var scale = this.scale;

        ctx.save();
        
        ctx.beginPath();
        ctx.moveTo(x * scale, (y+1) * scale);
        ctx.lineTo((x+0.5) * scale, (y+1-SIN60) * scale);
        ctx.lineTo((x+1.5) * scale, (y+1-SIN60) * scale);
        ctx.lineTo((x+2) * scale, (y+1) * scale);
        ctx.lineTo((x+1.5) * scale, (y+1+SIN60) * scale);
        ctx.lineTo((x+0.5) * scale, (y+1+SIN60) * scale);
        ctx.closePath();
        
        ctx.strokeStyle = "black";
        ctx.fillStyle = "red";
        ctx.lineWidth = 1;  
        ctx.stroke();
        ctx.fill();

        this.hexes.push({
            coords: {x:x, y:y},
            center: {x:(x+1)*scale, y:(y+1)*scale}
        });

        ctx.beginPath();
        ctx.rect((x+1)*scale, (y+1)*scale, 1, 1);
        ctx.stroke();
        ctx.closePath();
        /*ctx.beginPath();
        ctx.arc((x+1)*scale, (y+1)*scale, 1*scale, 0, 2*Math.PI);
        ctx.stroke();
        ctx.closePath();*/

        ctx.restore();
    },

    getHex: function(x, y) {
        var hex;
        var selectedHex;
        var radius;
        var dx, dy, distance;

        // on parcours tous les hexagones pour rechercher les candidats
        for (var i = 0, ii = this.hexes.length; i < ii; i++) {
            hex = this.hexes[i];
            dx = Math.abs(x - hex.center.x);
            dy = Math.abs(y - hex.center.y);
            distance = Math.sqrt(dx*dx + dy*dy);
            
            if(distance <= this.scale) {
                if(!selectedHex || (selectedHex && selectedHex.distance > distance))
                    selectedHex = {
                        hex: hex,
                        distance: distance
                    }
            }
        }

        return selectedHex ? selectedHex.hex : null;
    }
};

// exec
$(document).ready(function() {
    CrazyWars.map.trace("map", 20);
});