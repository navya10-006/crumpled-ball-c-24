
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,ground
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	paper1=new Paper(100,300,20);
	dustbin1=new Dustbin(200,300,100,100);
	ground=new Ground(400,550,800,20)
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  ground.display();
  drawSprites();
  Jump();
}

function Jump(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:4,y:-4});
	}
}


