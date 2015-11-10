// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ps;
var repeller;

var w = window;
var wX = w.innerWidth;
var wY = w.innerHeight;

function setup() {
  createCanvas(wX,wY);
  colorMode(HSB,360,100,100,100);
  ps = new ParticleSystem(createVector(width/2, 50));
  repeller = new Repeller(width/2, height/2);
}

function draw() {
  // background(51);
  ps.addParticle();

  fill(360,100,100,5);
  rect(0,0, width,height);

  // Apply gravity force to all Particles
  var gravity = createVector(0,0.05);
  ps.applyForce(gravity);

  ps.applyRepeller(repeller);

  repeller.display();
  ps.run();

}
