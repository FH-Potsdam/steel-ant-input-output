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
function setup(){
  // executed once
  colorMode(HSB,360,100,100,100);
  createCanvas(400,400);
  h = height/2;
  w = width/2;

var value = 0;
switch(value){

  case 0:

  break;

  }
}


function draw(){
  // executed all the time
  fill(0,0,0);
  stroke(120,0,100);
  strokeWeight(4);

  ellipse(x,y,w, h);

  rect(x,y,w,h);

  triangle(x1,y1,x2,y2,x3,y3);

  quad(x1,y1,x2,y2,x3,y3,x4,y4);

   arc(x,y,h,h,radians(90), radians(180), OPEN);
  //
  stroke(0);
  line(x1,y1, x2,y2);
  point(x,y);
}
