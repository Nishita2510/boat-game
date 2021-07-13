const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var shark,sharkImg;
var barrel,barrel2,barrelImg;
var ship,shipImg;
var pirate1 ,pirateImg1;
var pirate2,pirateImg2;
var pirate3,pirateImg3;
var pc1,pc1Img;
var pc2,pc2Img;
var replay,replayImg;
var boat1,boat1Img;
var boat2,boat2Img;

function preload(){
bgImg = loadImage("images/ocean.jpg");

shipImg = loadImage("images/ship1.png");
boat1Img = loadImage("images/boat.png");
boat2Img = loadImage("images/duckRing.png");

sharkImg = loadImage("images/shark.png");

replayImg = loadImage("images/replay.png");

}

function setup() {
  //createEdgeSprite(edges)
  createCanvas(1500,600);
  engine = Engine.create();

  //for creating sharks
  shark = new Shark(20, 540, 50, 50);
  

  //to create barrel
  barrel = new Barrel(910,435,50,50)
  barrel2 = new Barrel(770,435,50,50)

  //to create pirate ship
  ship = new Ship(1150,320,50,50)
  boat1 = new Boat(150,450,50,50)
  boat2 = new Boat(300,450,50,5)

  //for pirates
  pirate1 = new Pirate(800,340,50,50);
  pirate2 = new Pirate(870,315,50,50);
  pirate3 = new Pirate(890,260,50,50);

  //pc 
  tyler = new PC(342,425,50,50);
  ball = new Ball(300,300,40,40)
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  //if(shark.isTouching(rightEdge)){
   // shark.velocityX=-5
  //}  
  pirate1.display();
  pirate2.display();
  pirate3.display();

  ship.display();
  boat1.display();
  boat2.display();

  barrel.display()
  barrel2.display()

  tyler.display()
  ball.display()
 // drawSprites();
}