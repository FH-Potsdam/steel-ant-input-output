// Latitude, Longitude: 52.41369, 13.04992
// is somewhere here in Berlin

var lat = 52.41369;
var lon = 13.04992;
var x = 0;
var y = 0;
var mymap = null;

// getting started with p5js
function setup() {
  // executed once
  mymap = loadImage("world.png");
  var canvas = createCanvas(1280, 640);
  canvas.parent('sketch');
  x = map(lon, -180, 180, 0, width);
  y = map(lat, 90, -90, 0, height);

}

function draw() {
  image(mymap, 0, 0);
  ellipse(x, y, 10, 10);

}