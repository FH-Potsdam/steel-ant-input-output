var img = null;
// getting started with p5js
function setup() {
  // executed once
  img = loadImage("black.png");
  colorMode(HSB,360,100,100,100);
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch');
  imageMode(CENTER);
}


function draw() {
  // executed all the time
  background(360,23,100);
  image(img, width/2,height/2);

}