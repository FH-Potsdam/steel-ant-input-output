  var x = 0;
  var y = 25;
  var w = 42; // make him bigger or smaller
  var h = w; // distort by changing the h seperatly
  var bmi = 20; // body mass index

// getting started with p5js
function setup(){
  // executed once
  colorMode(HSB,360,100,100,100);
var canvas = createCanvas(400,400);
canvas.parent('sketch');
  x = width/2;
}


function draw(){
  // executed all the time
  // draw some simple shapes
  // hint! The order in which you draw is important
  // change x and y to move him around
  // a line takes 4 values the starting point and the end point
  line(x - w, y + h, x +w, y+h);
  // a ellipse always takes 4 values as parameter
  ellipse(x, y, w, h);
  // a point just two
  point(x, y); // look he has a nose
  // a rectangle also takes 4 values like the ellipse
  // but draws from its upper left corner
  rect(x-bmi/2, y + h, bmi, h);
  // you can also draw free forms by using vertecies
  noFill();
  beginShape();
  vertex(x - w*2, y + h*3);
  vertex(x - w, y + h*2);
  vertex(x + w, y + h*2);
  vertex(x + w*2, y + h*3);
  endShape();

}
