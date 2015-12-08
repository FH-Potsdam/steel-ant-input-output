var iss;
var x, y;
var worldmap;

/**
 * getData calls the the JSONP API of open notify
 */
function getData(data) {
  iss = data;
}
/**
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
  console.log('We received the data from the ISS location via a jsonp callback');
  console.log(timeConverter(iss.timestamp)); // log the time
  console.log(iss);// log the data
  var canvas = createCanvas(360, 180); // draw the canvas
  var lat = iss.iss_position.latitude; // get lat of the current position
  var lon = iss.iss_position.longitude;// get lat of the current position
  x = map(lon, -180, 180, 0, width); // map lon to x on our canvas
  y = map(lat, 90, -90, 0, height);// map lat to y on our canvas
}

function draw() {
  // draw all that stuff
  background(0);
  image(worldmap, 0, 0);
  ellipse(x, y, 10, 10);



}