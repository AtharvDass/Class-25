
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball=new Paper();
	ground=new Ground();
	box1=new Box2(520,675,100,10);
	
	box2=new Box(480,635,10,100);
	box3=new Box(570,635,10,100)
	Engine.run(engine);
	
	console.log(ball);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  
  ball.display();
  ground.display();
  box1.display();
  
  
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:87,y:-87});
	}

}



