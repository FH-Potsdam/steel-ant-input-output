/**
 * call the now api of the iss
 * and display the current location
 */
var request = require('request');
var moment = require('moment');

// this is our URL we make the request to
var url = "http://api.open-notify.org/iss-now.json";
// now do that
request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) { // error check
    var obj = JSON.parse(body);// parse the resulting string to JSON
    // convert the unix time to human readable time
    var d = moment.unix(obj.timestamp);
    // log that to the console
    console.log("Position at date: %s", d.toISOString());
    console.log("Latitude: %d", obj.iss_position.latitude);
    console.log("Longitude: %d", obj.iss_position.longitude);
  } else {
    console.error(error);
  }
});