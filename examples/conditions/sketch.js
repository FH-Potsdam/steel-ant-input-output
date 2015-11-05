
var val = 1;
// getting started with p5js
function setup(){
  // executed once
  text("just look into\nthe console", 10,10);


  if(val === 0){
    console.log("Yes it is 0");
  }else if(val === 1){
    console.log("Yes it is 1");
  }else {
    console.log("No it is not");
  }

  switch(val){
    case 0:
    console.log("Yes it is 0");
    break;
    case 1:
    console.log("Yes it is 1");
    break;
    default:
    console.log("No it is not");
    break;

  }
}


function draw(){
  // executed all the time

}
