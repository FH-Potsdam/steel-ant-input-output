// Latitude, Longitude: 52.41369, 13.04992
// is somewhere here in Berlin


var x = 0;
var y = 0;
var mymap = null;
var data = null;
function preload(){
  data = loadJSON("iss-now.json");

}
// getting started with p5js
function setup() {
  // executed once
  mymap = loadImage("world.png");
  var canvas = createCanvas(1280, 640);
  canvas.parent('sketch');

}

function draw() {
  image(mymap, 0, 0);
  for(var i = 0; i < data.length;i++){
    var pos = data[i].iss_position;
    var lat = pos.latitude;
    var lon = pos.longitude;
      x = map(lon, -180, 180, 0, width);
      y = map(lat, 90, -90, 0, height);
  ellipse(x, y, 10, 10);
  }

}