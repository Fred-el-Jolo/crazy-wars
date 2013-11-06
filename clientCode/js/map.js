var host = 'crazy-wars-c9-fred-el-jolo.c9.io';
var port = '80';

CrazyWars.map = {
    canvas: null,
    context: null,
    size: {
        width: 0,
        height: 0
    },
    hexes: [],
    scale: 1,
    
    trace: function(id, scale) {
        this.canvas = $("#"+id)[0];
        this.context = this.canvas.getContext("2d");
        
        if(scale)
            this.scale = scale;
        
        var SIN60 = Math.sin(Math.PI/3);

        for(var j=0; j<this.size.height; j++) {
            for(var i=0; i<this.size.width; i++) {
                this.hex(this.hexes[j*this.size.width+i], i*1.5, (j*Math.sqrt(3))+(i%2==0?0:SIN60));
            }
        }

        // bind a listener
        $("#"+id).click(this, this.onClick)
    },
    
    // assuming x and y are the no of hex
    hex: function(hex, x, y, selected) {
        var hexSelected = selected ? true : false;      
        var ctx = this.context;
        var SIN60 = Math.sin(Math.PI/3);
        var scale = this.scale;

        ctx.save();

        // render type of terrain
        var img = new Image();
        img.src = "images/hex/plain.png";
        img.onload = function() {
            ctx.drawImage(this, x*scale, (y+1-SIN60) * scale, this.width*scale/100, this.height*scale/100);

            ctx.beginPath();
            ctx.moveTo(x * scale, (y+1) * scale);
            ctx.lineTo((x+0.5) * scale, (y+1-SIN60) * scale);
            ctx.lineTo((x+1.5) * scale, (y+1-SIN60) * scale);
            ctx.lineTo((x+2) * scale, (y+1) * scale);
            ctx.lineTo((x+1.5) * scale, (y+1+SIN60) * scale);
            ctx.lineTo((x+0.5) * scale, (y+1+SIN60) * scale);
            ctx.closePath();
            
            if(hexSelected)
                ctx.strokeStyle = "yellow";
            else
                ctx.strokeStyle = "black";

            ctx.lineWidth = 1;  
            ctx.stroke();
        }        

        hex["center"] = {
            x: (x+1)*scale, 
            y: (y+1)*scale
        };

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
    },

    newMap: function(w, h) {
        this.size.width = w;
        this.size.height = h;

        var url = "https://crazy-wars-c9-fred-el-jolo.c9.io/map?w="+this.size.width+"&h="+this.size.height;
        $.ajax(url, {
            type: "GET",
            dataType: "json",
            context: this,
            success: function(data, textStatus, jqXHR) {
                if(data && data.map && $.isArray(data.map)) {
                    for(var i=0, ii=data.map.length; i<ii; i++) {
                        this.hexes.push({
                            coords: {
                                x: i%this.size.width,
                                y: Math.floor(i/this.size.height)
                            },
                            type: data.map[i].type
                        });
                    }
                }

                this.trace("map", 20);
            }
        });
    },

    onClick: function(oEvent) {
        var me = oEvent.data;
        var hex = me.getHex(oEvent.clientX, oEvent.clientY);
        if(hex) {
            me.hex(hex.coords.x, hex.coords.y, true);
        }
    }
};

// exec
 $(document).ready(function() {
     CrazyWars.map.newMap(20, 10);
});