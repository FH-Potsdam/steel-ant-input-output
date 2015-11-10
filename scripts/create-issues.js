var execSync = require('child_process').execSync;
var names = [ "dariaDunkelbier", "miduku", "wollemannone", "Ourelius", "dziewi", "nikoripka" ];

for (var i = 0; i < names.length; i++){
  execSync('echo " creating issue for "' + names[i] , {encoding:'utf8', stdio:[0,1,2]});
  execSync('ghi open "commit intermidiate result of digital algrithm ' + names[i] +'"', {encoding:'utf8', stdio:[0,1,2]});
    // execSync('ghi assign ' + Number(i+3)  + ' -u ' + names[i], {encoding:'utf8', stdio:[0,1,2]});

}