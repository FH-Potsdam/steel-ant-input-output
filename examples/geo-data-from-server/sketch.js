// Latitude, Longitude: 52.41369, 13.04992
// is somewhere here in Berlin


var x = 0;
var y = 0;
var mymap = null;
var data = null;
var maxpoints = 600;
function preload(){
  data = loadJSON("iss-now.json");

}
// getting started with p5js
function setup() {
  // executed once
  colorMode(HSL, 360,100,100,100);
  mymap = loadImage("world.png");
  var canvas = createCanvas(1280, 640);
  canvas.parent('sketch');

}

function draw() {
  tint(225, 20, 50);
  image(mymap, 0, 0);
  if(maxpoints >= data.length){
    maxpoints = data.length;
  }
  var step = 360/maxpoints;
  for(var i = 0; i < /*data.length*/ maxpoints;i++){
    fill(step*i,60,70,100);
    var pos = data[i].iss_position;
    var lat = pos.latitude;
    var lon = pos.longitude;
      x = map(lon, -180, 180, 0, width);
      y = map(lat, 90, -90, 0, height);
  ellipse(x, y, 10, 10);
  }

}