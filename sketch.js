const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var backgroundpic,engine,world;
var hero,rope,ground;
var building1,monster;

function preload() {
//preload the images here
backgroundpic=loadImage("gamingbackground2.png")
}

function setup() {
  createCanvas(1540, 750);
  // create sprites here
 engine=Engine.create();
 world=engine.world;

 hero = new Hero(250,250,350,200);
 rope=new Rope(hero.body,{x:300,y:200});
 ground=new Ground(500,650,1580,30);
 monster=new Monster(1150,450,200,200);

//First Lane.
box1 = new Box(600, 100, 70, 70);
box2 = new Box(600, 100, 70, 70);
box3 = new Box(600, 100, 70, 70);
box4 = new Box(600, 100, 70, 70);
box5 = new Box(600, 100, 70, 70);
box6 = new Box(600, 100, 70, 70);
box7 = new Box(600, 100, 70, 70);


//Second Lane.
box21 = new Box(700, 100, 70, 70);
box22 = new Box(700, 100, 70, 70);
box23 = new Box(700, 100, 70, 70);
box24 = new Box(700, 100, 70, 70);
box25 = new Box(700, 100, 70, 70);
box26 = new Box(700, 100, 70, 70);


// Third Lane.
box31 = new Box(800, 100, 70, 70);
box32 = new Box(800, 100, 70, 70);
box33 = new Box(800, 100, 70, 70);
box34 = new Box(800, 100, 70, 70);
box35 = new Box(800, 100, 70, 70);
box36 = new Box(800, 100, 70, 70);
box37 = new Box(800, 100, 70, 70);
box38 = new Box(800, 100, 70, 70);


//Last Lane.
box01 = new Box(900, 100, 70, 70);
box02 = new Box(900, 100, 70, 70);
box03 = new Box(900, 100, 70, 70);
box04 = new Box(900, 100, 70, 70);
box05 = new Box(900, 100, 70, 70);

}

function draw() {

  Engine.update(engine);
  background(backgroundpic);

  fill("black")
  textSize(30)
  text("Drag the Hero and kill the monster",500,50);

  ground.display();
  rope.display();
  hero.display();
  monster.display();
  fill("red")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

 
  fill("yellow")
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

 
  fill("green")
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
 
  fill("lightpink")
  box01.display();
  box02.display();
  box03.display();
  box04.display();
  box05.display();
 
  //fill("orange");

  //fill("blue");

}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}