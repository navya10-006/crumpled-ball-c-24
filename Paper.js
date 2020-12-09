class Paper{
    constructor(x,y,r){
        var options={
            'restitution':0.5,
            'friction':1.0,
            'density':1.2
        }
        this.body =Matter.Bodies.circle(x,y,r,options);
        this.radius=r;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}