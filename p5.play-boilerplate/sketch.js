const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balls = new Array();
var y = 0;
var x = 0;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(750,680,1500,20);

  division1 = new Ground(0,340,10,700);
  division2 = new Ground(68.5,470,10,400);
  division3 = new Ground(137,470,10,400);
  division4 = new Ground(205.5,470,10,400);
  division5 = new Ground(274,470,10,400);
  division6 = new Ground(342.5,470,10,400);
  division7 = new Ground(411,470,10,400);
  division8 = new Ground(479.5,340,10,700);
  division9 = new Ground(10,470,10,400);
  division10 = new Ground(469.5,470,10,400);

  c1 = new Circle(34.25,50,15);
  c2 = new Circle(102.75,50,15);
  c3 = new Circle(171,50,15);
  c4 = new Circle(239.5,50,15);
  c5 = new Circle(308,50,15);
  c6 = new Circle(376.5,50,15);
  c7 = new Circle(445,50,15);

  c8 = new Circle(68.5,100,15);
  c9 = new Circle(137,100,15);
  c10 = new Circle(205.5,100,15);
  c11 = new Circle(274,100,15);
  c12 = new Circle(342.5,100,15);
  c13 = new Circle(411,100,15);

  c14 = new Circle(34.25,150,15);
  c15 = new Circle(102.75,150,15);
  c16 = new Circle(171,150,15);
  c17 = new Circle(239.5,150,15);
  c18 = new Circle(308,150,15);
  c19 = new Circle(376.5,150,15);
  c20 = new Circle(445,150,15);

  c21 = new Circle(68.5,200,15);
  c22 = new Circle(137,200,15);
  c23 = new Circle(205.5,200,15);
  c24 = new Circle(274,200,15);
  c25 = new Circle(342.5,200,15);
  c26 = new Circle(411,200,15);
  
  for ( i = 0; i<100; i++)
  {
      y = y - 1000;
      x = x + 10;
      balls[i] = new Circle2(x,y,15);
  }
 
  
}

function draw() {
  background("black");
  rectMode(CENTER);
  Engine.update(engine);

  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();
  division10.display();

 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();
 c6.display();
 c7.display();

 c8.display();
 c9.display();
 c10.display();
 c11.display();
 c12.display();
 c13.display();

 c14.display();
 c15.display();
 c16.display();
 c17.display();
 c18.display();
 c19.display();
 c20.display();

 c21.display();
 c22.display();
 c23.display();
 c24.display(); 
 c25.display();
 c26.display();

 for (i=0; i<balls.length; i++)
 {
   balls[i].display();
   
 }
 
}



function ball()
{
    circle1 = new Circle2(240,400,25);
    circle1.display();
}