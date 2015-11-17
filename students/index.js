
var express = require('express');
var serveIndex = require('serve-index');
var port = 8080;
var app = express();
app.use(express.static(__dirname + "/"));
app.use('/', serveIndex(__dirname + '/'));

console.log("Express listening on port %s", port);
console.log("http://localhost:%s", port);
app.listen(port);