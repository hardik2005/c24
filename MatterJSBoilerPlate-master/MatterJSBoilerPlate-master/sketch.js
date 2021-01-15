
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var paper1;

function setup() {
  createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,650,1500,20);
	box2 = new Box(1075,580,30,120);
	box3 = new Box(910,580,30,120);
	box1 = new Box(1000,625,150,30);
paper = new Paper(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  
  
drawSprites();{

}
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

