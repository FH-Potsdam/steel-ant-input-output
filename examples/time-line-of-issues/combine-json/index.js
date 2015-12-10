var fs = require('fs');
var dir = require('directory')(__dirname +'/json/', function (module, name) {
  exports[name] = module;
});

var arr = [];
for (var key in dir){
  // console.log(dir[key]);
  arr.push.apply(arr,dir[key])
}
console.log(arr.length);

fs.writeFile('../issue.json', JSON.stringify(arr), 'utf8', function(err, data){
  if(err) throw err;
  else console.log('Wrote file');
});
