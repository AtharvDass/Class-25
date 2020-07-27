class Box2{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png");
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,520,635,110,100);
    }
}