
var val = 1;
// getting started with p5js
function setup(){
  // executed once
  createCanvas(400,400);
  for(var x = 0; x < width;x +=5 ){
    for(var y = 0; y <height; y += 5){
      
    ellipse(x, y, 5,5);
    }
  }
  // var counter = 0;
  // while(counter < 100){
  //   console.log(counter);
  //   counter++;
  // }

}


function draw(){
  // executed all the time

}
