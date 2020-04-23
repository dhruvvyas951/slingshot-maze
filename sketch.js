// creates engines
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

//creates objects
  var engine;
  var Ground;
  var world;
  var box1, box2, box3, box4, box5, box6;
  var box7, box8, box9, box10, box11, box12;
  var stand1, stand2;


//setup
function setup() {
  //size of the screen
  createCanvas(800,500);

    //engines
    engine = Engine.create();
    world = engine.world;
  
    //objects
    Ground = new ground(400,500,800,30);
    box1 = new Box(600,195);
    box2 = new Box(540,195);
    box3 = new Box(660,195);
    box4 = new Box(570,120);
    box5 = new Box(630,120);
    box6 = new Box(600,65);
    box7 = new Box(600,395);
    box8 = new Box(540,395);
    box9 = new Box(660,395);
    box10 = new Box(570,320);
    box11 = new Box(630,320);
    box12 = new Box(600,265);
    stand1 = new stand(600,200);
    stand2 = new stand(600,400);

}

function draw() {
  //background color
     background(183, 219, 24); 

  Engine.update(engine);
 
    //displays the created object
    Ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    stand1.display();
    stand2.display();

  drawSprites();
}