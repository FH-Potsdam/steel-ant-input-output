
// getting started with p5js
function setup(){
  // executed once
var canvas = createCanvas(100,100);
canvas.parent('sketch');
  text("just look into\nthe console", 10,10);

  if("1" === 1){
    console.log("This is the same");
  }else{
    console.log("This is not the same");

  }

  if("1" == 1){
    console.log("Hm. A string is the same as the number one?\nThis can't be...");
  }
}


function draw(){
  // executed all the time

}
