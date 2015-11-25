var x = 0;
var y = 0;
var weite = 20;
var hoehe = weite;
var myhue = 0;

// getting started with p5js
function setup(){
  x = random(-5,100);
 // this is executed once
  colorMode(HSL, 360, 100, 100, 100);
var canvas = createCanvas(600,400);
canvas.parent('sketch');
 y = height/2;
}

function draw(){
background(0,0,0);
  fill(0,0,100, 100); // rgba
  ellipse(x,y, weite, hoehe);
// this is executed all the time
  x = x + 1;


 if(x >= 50){
   x = 50;
 }
 if(y >= 50){
   y = 50;
 }
// console.log(x);
}
