class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,690,1000,20,{isStatic: true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,1000,20)
    }
}