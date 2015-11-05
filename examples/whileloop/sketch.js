
// getting started with p5js
// this is a example for the shile loop

function setup(){
  // executed once
  createCanvas(400,400);
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
