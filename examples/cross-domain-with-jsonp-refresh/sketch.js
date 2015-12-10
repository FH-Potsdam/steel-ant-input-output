var iss = null; // will hold the data
var x, y; // locations on screen
var worldmap; // for the image
var tick = 0; // ticks away the time
var locations = []; // keep all that loctions on screen for a trail
var url = "http://api.open-notify.org/iss-now.json?callback=?";

/**
 *
 * When the document is loaded call the the JSONP API of open notify
 * and write to local storage
 * This is not part of the P5.js this uses jQuery
 * It will update every 5 seconds
 */
$(document).ready(function() {
  console.log("ready!");
  // var counter = 0;
  var timer = setInterval(function() {
    console.log('update sessionStorage from open notify API');
    $.getJSON(url, function(data) {
      // localStorage
      sessionStorage.setItem('data', JSON.stringify(data));
      // iss = data;
    });
  }, 5000);
});
/**
 * setup is called once
 */
function setup() {
  // executed once
  worldmap = loadImage('world-map.png'); // load the image
  // console.log('We received the data from the ISS location via a jsonp callback');
  // console.log(timeConverter(iss.timestamp)); // log the time
  // console.log(iss);// log the data
  var canvas = createCanvas(360, 180); // draw the canvas
  canvas.parent('sketch'); // where should our image go
}
/**
 * draw is called all the time
 * this is P5.js specific
 */
function draw() {
  // so we make a check in the local storage every 500 ticks
  // this is not milliseconds
  // tried it with millis created an error
  // but it was late at night so maybe you have more luck
  //
  // @TODO: make it work with millis so it sync-isher with the ajax call
  // @TODO: find out why we can store data from the ajax call global
  //
  if (tick % 500 === 0) {
    iss = JSON.parse(sessionStorage.getItem('data')); // get the data from storage
    console.log(iss); // just to prof that we have data
    // so when we got the data we can
    // grab lat/lon from it and draw our marker
    if (iss !== null) {
      var lat = iss.iss_position.latitude; // get lat of the current position
      var lon = iss.iss_position.longitude; // get lat of the current position
      x = map(lon, -180, 180, 0, width); // map lon to x on our canvas
      y = map(lat, 90, -90, 0, height); // map lat to y on our canvas
      locations.push([x, y]); // store them for the trail
    }
  }
  tick++;// tick tock some time has passed

  // draw all that stuff
  background(0); // black
  image(worldmap, 0, 0); // the world map.
  // if we have enough points for a trail we draw it
  if (locations.length > 1) {
    for (var i = 1; i < locations.length; i++) {
      stroke(128); // make it visible on the map
      // locations is a 2 dim array [index][0] = x | [index][i] = y
      line[locations[i][0], locations[i][1], locations[i - 1][0], locations[i - 1][1]];
    }
  }
  ellipse(x, y, 10, 10); // and our marker
}