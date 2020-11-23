
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	roof= new Roof(400,200,550,30);
	bob1= new Bob(400,500,40);
	bob2= new Bob(500,500,40);
  bob3= new Bob(600,500,40);
  bob4= new Bob(300,500,40);
  bob5= new Bob(200,500,40);
  rope=new Rope(bob1.body, roof.body, 0, 0)
  rope2=new Rope(bob2.body, roof.body, 100, 0)
  rope3=new Rope(bob3.body, roof.body, 200, 0)
  rope4=new Rope(bob4.body, roof.body, -100, 0)
  rope5=new Rope(bob5.body, roof.body, -200, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(bob3.body, bob3.body.position,{x:15, y:-15})
  }
}



