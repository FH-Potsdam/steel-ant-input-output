var x = 0; // values
var y = 0; // values
var x1 = 0; // values
var y1 = 0; // values
var x2 = 0; // values
var y2 = 0; // values
var x3 = 0; // values
var y3 = 0; // values
var x4 = 0; // values
var y4 = 0; // values
var h = 0; // values
var w = 0; // values

// getting started with p5js
function setup() {
  // executed once
  colorMode(HSL, 360, 100, 100, 100);
var canvas = createCanvas(400, 400);
canvas.parent('sketch');
  background(50);
  h = 20;
  w = 20;
  x += w;
  y += h;
  x1 = x2 = x3 = x4 = x;
  y1 = y2 = y3 = y4 = y;
}


function draw() {
  // executed all the time
  fill(0, 0, 0);
  stroke(120, 0, 100);
  strokeWeight(1);
  // the following primitives are affected by
  // stroke and fill
  ellipse(x, y, w, h);

  rect(x + w, y, w, h);

  triangle(x1 + w * 4, y1, x2 + w * 4, y2 + h, x3 + w * 3, y3 + h / 2);

  quad(50, 50, 50, 120, 120, 130, 60, 50); // getting tired of that calc

  arc(200, 200, h, h, radians(90), radians(350), PIE);
  // these are only affected by stroke
  strokeWeight(5);
  line(50, 300, width - w, 320);

  point(width / 2, height / 4);

  // there is another one that is pretty useful
  // the vertex!
  beginShape();
  vertex(350,height-50);
  vertex(350,height-100);
  vertex(280,height-75);
  endShape(CLOSE);
  noLoop();
}