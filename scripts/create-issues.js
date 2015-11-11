var execSync = require('child_process').execSync;
var names = ["antsteelmule", "dziewi", "josues", "Logetcrea", "lpaubielsa", "martakarta", "miduku", "nikoripka", "Ninotschka", "node_modules", "Ourelius", "Q-rec", "swjo", "vogelino", "wollemannone", "dariaDunkelbier"];

// currently dariaDunkelbier is still not a team member
for (var i = 0; i < names.length -1; i++){
  execSync('echo " creating issue for "' + names[i] , {encoding:'utf8', stdio:[0,1,2]});
  // create a new issue and add it to the milestoen
  execSync('ghi open "update algorithm and create microsite" -u ' + names[i] + '--milestone 2 --label task -m "just create a new repo with your sketch.js and a index.html. After that create a branch called gh-pages. Your microsite should then be availabale under http://YOUR-USER-NAME.github.io/YOUR-REPO-NAME"' , {encoding:'utf8', stdio:[0,1,2]});
  execSync('ghi open "create mockup" -u ' + names[i] + '--milestone 2 --label task -m "This can be a 3D rendering, or you build something from wood or clay or paper, or you do a Photoshop session or 3D Print or whatever "' , {encoding:'utf8', stdio:[0,1,2]});
  execSync('ghi open "create presentation" -u ' + names[i] + '--milestone 2 --label task -m "please as PDF if possible so we can present from the same computer. aspect ratio of the beamer is 16 × 9 Full HD 1920 × 1080"' , {encoding:'utf8', stdio:[0,1,2]});

  execSync('ghi open "upload presentation" -u ' + names[i] + '--milestone 2 --label task -m "add it into the folder [https://incom.org/workspace/6176/#list-f10911](https://incom.org/workspace/6176/#list-f10911)"' , {encoding:'utf8', stdio:[0,1,2]});
    // execSync('ghi assign ' + Number(i+3)  + ' -u ' + names[i], {encoding:'utf8', stdio:[0,1,2]});

}