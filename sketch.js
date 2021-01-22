const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,15);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var s = 40; s <=width; s = s +50) {
    plinkos.push(new Plinko(s,75));
  }

  for (var s = 15; s <=width-10; s = s +50) {
    plinkos.push(new Plinko(s,175));
  }

  for (var s = 40; s <=width; s = s +50) {
    plinkos.push(new Plinko(s,275));
  }

  for (var s = 15; s <=width-10; s = s +50) {
    plinkos.push(new Plinko(s,375));
  }
console.log(particles);
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  for (var s = 0; s < plinkos.length; s++) {   
    plinkos[s].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  drawSprites();
}