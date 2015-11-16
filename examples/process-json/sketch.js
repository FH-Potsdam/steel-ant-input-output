// take a look at the data.json next to the inde.html
//{
//   "coords": [
//     {
//       "x": 10,
//       "y": 10
//     },
//     {
//       "x": 20,
//       "y": 10
//     },
//     {
//       "x": 30,
//       "y": 10
//     }
//   ]
// }
var data;
function preload(){
  var url = "data.json";
  data = loadJSON(url);
}
// getting started with p5js
function setup(){
  // executed once
  var canvas = createCanvas(300,100);
  canvas.parent('sketch');
  var step = 255/data.coords.length;
  for(var i = 0; i < data.coords.length;i++){
    fill(step);
    step+=step;
    var p = data.coords[i];
    rect(p.x,p.y, p.x, p.y);

  }
}
function draw(){
  // executed all the time
}
