
// getting started with p5js
function setup(){
  // executed once
var canvas = createCanvas(100,100);
canvas.parent('sketch');
  text("just look into\nthe console", 10,10);
var dt = new Date(); // this gets the date object

var hour = dt.getHours(); // now get the hour
var minute = dt.getMinutes(); // now get the minute

// log all this
console.log("The hour is %s", hour);
console.log("The minute is %s", minute);

// take a look into the Web and search for
// Javascript Date Object
}

function draw(){
  // executed all the time
}
