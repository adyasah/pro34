const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var bgImg


function preload(){
  bgImg=loadImage("images/GamingBackground.png")
  
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200, 300, 800, 20);
  box1 = new Monster(570,100,130,130);

  
  // box2 = new Box(550,100,50,50);
  // box3 = new Box(550,100,50,50);
  // box4 = new Box(550,100,50,50);
  // box5 = new Box(550,100,50,50);
  // box6 = new Box(550,100,50,50);

  box7 = new Box(470,100,50,50);
  box8 = new Box(470,100,50,50);
  box9 = new Box(470,100,50,50);
  box10= new Box(470,100,50,50);
  box11= new Box(470,100,50,50);
  box12= new Box(470,100,50,50);

  box13= new Box(370,100,50,50);
  box14= new Box(370,100,50,50);
  box15= new Box(370,100,50,50);
  box16= new Box(370,100,50,50);
  box17= new Box(370,100,50,50);
  box18= new Box(370,100,50,50);

  ball = new Ball(200, 200, 80, 80);
  //ball.scale=0.01
  rope = new Rope(ball.body, { x: 300, y: 10 });

}

function draw() {
  background(bgImg)
  Engine.update(engine)

  ground.display()
  box1.display();
  // box2.display();
  // box3.display();
  // box4.display();
  // box5.display();
  // box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  ball.display();
  rope.display();

}



function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
} 

     
 