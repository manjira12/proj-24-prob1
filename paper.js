class Paper{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        World.add(World.this.body);
    }
    display (){
        Fill("purple");
    }
}