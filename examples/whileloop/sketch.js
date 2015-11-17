
// getting started with p5js
// this is a example for the shile loop

function setup(){
  // executed once
var canvas = createCanvas(400,400);
canvas.parent('sketch');
  var counter = 0;
  var step = 10;
  var x = step/2;
  var y = step/2;
  while(counter < width*height){
    ellipse(x,y,step,step);
    x+=step;
    if(x >= width){
      x = step/2;
      y +=step;
    }
    counter++;
  }
}


function draw(){
  // executed all the time

}
