var h = 0;
var s  = 50;
var b = 50;
var a = 100;

// getting started with p5js
function setup(){
  // executed once
  colorMode(HSB,360,100,100,100);
var canvas = createCanvas(400,400);
canvas.parent('sketch');
}


function draw(){
  // executed all the time
  background(100);



  // var c = color(h,s,b, a);

  fill(h,s,b,a);
  // stroke(20);
  rect(0,0,width/3,height);
  h = h + 120;
  fill(h,s,b,a);
  rect(width/3,0,width/3,height);
  h = h + 120;
  fill(h,s,b,a);
  rect((width/3) * 2,0,width/3,height);

noLoop();
}
