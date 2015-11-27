/**
 * call the pass api of the iss
 * and display the dates it will be over us
 * 52.41366 13.04994 is here at the FHP
 */
var request = require('request');
var moment = require('moment');
// lets build the string we need
var lat = "lat=52.41366"; // latitude
var lon = "lon=13.04994"; // longitude
var alt = "alt=35"; // we are 35 meters over NN
var n = "n=10"; // just want the next 10 passes
var url = "http://api.open-notify.org/iss-pass.json";
// now lets build the URL for the request
var req = url + "?" + lat + "&" + lon + "&" + alt + "&" + n;
// make the web request
request(req, function(error, response, body) {
  if (!error && response.statusCode == 200) { // error check
    var obj = JSON.parse(body);// parse the result to a JSON object
    console.log("The ISS will be over the FHP at lat/lon 52.41366 13.04994 at the following dates:");
    // log to the console
    // transform unix timestamps to readable form
    for (var i = 0; i < obj.response.length; i++) {
      var d = moment.unix(obj.response[i].risetime);
      console.log(d.toISOString());
    }
  } else {
    console.error(error);
  }
});