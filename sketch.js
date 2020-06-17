const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var ground;
var Ball, Chain;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(400, 380, 800, 20);

  box1 = new box(400, 345, 50, 50);
  box2 = new box(450, 345, 50, 50);
  box3 = new box(500, 345, 50, 50);
  box4 = new box(425, 295, 50, 50);
  box5 = new box(475, 295, 50, 50);
  box6 = new box(450, 245, 50, 50);

  Ball = new ball(200, 200, 30);

  Chain = new chain(Ball.body,{x: 200, y: 150});
}

function draw() {
  background(255,255,255);

  Engine.update(engine);
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  Ball.display();
  Chain.display();




  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Chain.attach(Ball.body);
  }
}
