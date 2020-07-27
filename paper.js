class Paper{
    constructor(){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(100,200,25,options)
        World.add(world,this.body);
        this.img=loadImage("paper.png");
    }
    display(){
    
     
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.img,0,0,72,72);
    pop();
    }
}