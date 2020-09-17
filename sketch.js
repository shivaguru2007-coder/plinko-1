const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var world

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
function setup() {  
  createCanvas(440,700);
  var engine = Engine.create();
   world = engine.world;

  gr = new Ground(200,690,400,20);
  //createSprite(400, 200, 50, 50);
  Engine.run(engine);
}

function draw() {
  background(255,255,255);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-20,width/2+10),10,10));
  }
  for (var j=40;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }

  for (var k = 0;k <=width;k =k +80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
  for (var j=0;j < particles.length; j++){
    particles[j].display();
  }
  for (var j=0;j < plinkos.length; j++){
   plinkos[j].display();
  }
  for (var k=0;k < divisions.length; k++){
    divisions[k].display();
  }
  gr.display();
  //drawSprites();
}