var iss;
var x, y;
var worldmap;
var tick = 0;
var locations = [];
    var url = "http://api.open-notify.org/iss-now.json?callback=?";
/**
 *
 * When the document is loaded call the the JSONP API of open notify
 * and write to local storage
 */
$(document).ready(function() {
  console.log("ready!");
  // var counter = 0;
  var timer = setInterval(function() {
    console.log('update sessionStorage from open notify API');
    $.getJSON(url, function(data) {
      // localStorage
      sessionStorage.setItem('data', JSON.stringify(data));
      iss = data;
    });
  }, 5000);
});


/**
 * timeConverter
 * just to see the date
 * taken from
 * http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
 */
function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

function setup() {

  worldmap = loadImage('world-map.png'); // load the image
  // console.log('We received the data from the ISS location via a jsonp callback');
  // console.log(timeConverter(iss.timestamp)); // log the time
  // console.log(iss);// log the data
  var canvas = createCanvas(360, 180); // draw the canvas
  canvas.parent('sketch');
}

function draw() {
  if(tick%500===0){
    iss = JSON.parse(sessionStorage.getItem('data'));
    console.log(iss);
    //
  var lat = iss.iss_position.latitude; // get lat of the current position
  var lon = iss.iss_position.longitude;// get lat of the current position
  x = map(lon, -180, 180, 0, width); // map lon to x on our canvas
  y = map(lat, 90, -90, 0, height);// map lat to y on our canvas
  locations.push([x,y]);
  }
  tick++;

  // draw all that stuff
  background(0);
  image(worldmap, 0, 0);
  if(locations.length > 1){
    for(var i = 1; i < locations.length;i++){
      stroke(128);
    line[locations[i][0],locations[i][1],locations[i-1][0],locations[i-1][1]];
    }
  }
  ellipse(x, y, 10, 10);



}