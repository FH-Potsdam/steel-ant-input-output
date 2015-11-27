/**
 * call the now api of the iss
 * and display twho is in space right now
 */
var request = require('request');

var url = "http://api.open-notify.org/astros.json";// the API url
// make the request
request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {// error check
    var obj = JSON.parse(body); // parse the string to JSON
    // display how many people are in space right now
    console.log("There are %s people in space right now.", obj.number);
    // loop them all and tell us which spaceship and their name
    for (var i = 0; i < obj.people.length; i++) {
      console.log("On Craft: %s\tName: %s", obj.people[i].craft, obj.people[i].name);
    }
  } else {
    console.error(error);
  }
});