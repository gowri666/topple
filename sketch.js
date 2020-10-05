const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, boy;
var box1,box2;
var ground;

function setup() {
  createCanvas(800,400);
 engine= Engine.create();
 world = engine.world;

 box2= new Box(240,100,50,50);
box1= new Box ( 200,300,50,50);

ground= new Ground(200,390,400,20);


}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  box2.display();
  box1.display();

  ground.display();

  drawSprites();
}