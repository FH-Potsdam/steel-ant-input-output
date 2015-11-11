// simple bouncing from right to left
// @author fabiantheblind
var hit = false;
var x = 0;
var y = 250;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  noStroke();
  rect(0,0,width,height);
  strokeWeight(1);
  stroke(0);
  ellipse(x, y, 10, 10);
  if (hit === true) {
    x--;
  } else {
    x++;
  }
  if (x === width) {
    hit = true;
  }
  if (x === 0) {
    hit = false;
  }

}