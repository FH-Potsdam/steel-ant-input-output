var geocoder = require('geocoder');
// Reverse Geocoding
var fs = require('fs');
var res = [];
fs.readFile('iss-now.json', 'utf8', function(err, data) {
  if (err !== null) throw err;
  var json = JSON.parse(data);
  var i = 0;
  var timer = setInterval(function() {
    console.log('json[i] ', json[i]);
    var pos = json[i].iss_position;
    var lat = pos.latitude;
    var lon = pos.longitude;
    geocoder.reverseGeocode(lat, lon, function(err, data) {
      // do something with data
      if (err !== null) throw err;
      console.log(data);
      res.push(data);
      i++;
      if (i >= 50 /*json.length*/ ) {
        fs.writeFile('geocoded-iss-now.json', JSON.stringify(res), 'utf8', function(err) {
          if (err) throw err;
          console.log('wrote data to file');
          clearInterval(timer);
        });
      }
    });

  }, 3000);


});