var x = 0;
var y = 50;
var weite = 20;
var hoehe = weite;
var myhue = 0;

// getting started with p5js
function setup(){
 // this is executed once
  colorMode(HSL, 360, 100, 100, 100);
  createCanvas(600,400);
 y = height/2;
}

function draw(){

  // background(0, 255);
  noStroke();
  // strokeWeight(5);
  fill(myhue,40,75,100);
  rect(0,0, width,height);
  myhue= myhue + 1;

strokeWeight(10);
stroke(100,0,100,100);
line(0,height/2,width,height/2);
strokeWeight(20);

point(width/2,height/2);
noStroke();

  if(myhue> 360){
    myhue = 0;
  }
  // fill(255); // greyscale
  // fill(255, 100); //greyscale , alpha
  // fill(0,255,0); // rgb
  fill(0,0,100, 100); // rgba
  ellipse(x,y, weite, hoehe);
// this is executed all the time
  x = x + 5;
 y =  (height/2) + random(-5,5);

 if(x > width){
   x = 0;
 }
// console.log(x);
}
