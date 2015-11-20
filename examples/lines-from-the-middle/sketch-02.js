var w = 200;
var h = 200;
var p1x = 0;
var p1y = 0;
var p2x = 0;
var p2y = 400 / 2;
var off = 0.0;
var angle = 0;
var numberOfSegments = 200;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch');
  background(190);
}

function draw() {
  // some markers for
  // verification
  stroke(255);
  line(width/2,0, width/2, 5);
  line(width/2,height, width/2, height - 5);
  line(0,height/2, 5, height/2);
  line(width,height/2, width - 5, height/2);

  // end of the markers now to the real thing
  // the angle of the curve
  if (angle < 360) {
    angle++;
  }
  stroke(190);// so we see something
  // set the startpoints of the line
  p1x = sin(radians(angle)) * width / 2;
  p1y = cos(radians(angle)) * height / 2;
  point(p1x, p1y); // this is just for checking how the values are

  var n = noise(off) * 10; // calculate the noise value
  off = off + 0.5; // increase the noise value

if(p1x !== width/2 && p1y !== 0){
  // if we are not at the edges
  p1x += n;
  p1y += n;
}
  // draw a line
  stroke(0);
  line(p1x, p1y, p2x, p2y);
  // now pass the current points into the last points
  // for the next round
  p2x = p1x;
  p2y = p1y;
  if(p1x === width/2){
    // saveCanvas("img","png");
  }
}

