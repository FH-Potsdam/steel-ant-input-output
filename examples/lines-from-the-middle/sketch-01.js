// draw some basic shapes into the corners
var randomStartValue = 0;
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch');
  background(128);
  randomStartValue = random(0, 4);
  console.log(Math.floor(randomStartValue));
  ellipseMode(CORNER);
  smooth();
}
function draw() {
  noFill();
  stroke(0);
  strokeWeight(2);
  if (Math.floor(randomStartValue) === 0) {
    console.log("ellipse");
    ellipse(-width / 2, -height / 2, width, height);

  } else if (Math.floor(randomStartValue) === 1) {
    console.log("rect");
    rect(-width / 2, -height / 2, width, height);
  } else if (Math.floor(randomStartValue) === 2) {
    console.log("triangle");

    triangle(-width, -height, width / 2, 0, 0, width / 2);
  } else if (Math.floor(randomStartValue) === 3) {
    console.log("line");
    line(0, widht/2, height/2, 0);
  }
  noLoop();
}