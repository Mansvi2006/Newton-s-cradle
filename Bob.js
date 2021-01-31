class Bob{
    constructor(x,y){
        var options= {
            'isStatic' : false,
            'friction':0.5,
            'restitution':0.3,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,50,options);
        

        World.add(world,this.body);
    }
    display(){
      
      var pos =this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("pink");
        ellipse(pos.x,pos.y,50,50);
      
    }
    
}       