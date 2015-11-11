// the ghi used is
// https://github.com/stephencelis/ghi
// install via brew install ghi
//
// not this one
// https://github.com/macroscope/ghi
var execSync = require('child_process').execSync;
var names = ["antsteelmule", "dziewi", "josues", "Logetcrea", "lpaubielsa", "martakarta", "miduku", "nikoripka", "Ninotschka", "node_modules", "Ourelius", "Q-rec", "swjo", "vogelino", "wollemannone", "dariaDunkelbier"];

// currently dariaDunkelbier is still not a team member
names.forEach(function(element, index, array) {
  if (element !== 'dariaDunkelbier') {
    console.log(element);
    execSync('echo " creating issue for "' + names[i], {
      encoding: 'utf8',
      stdio: [0, 1, 2]
    });
    // create a new issue and add it to the milestone
    execSync(
      'ghi open "update algorithm and create microsite" -u ' + names[i] + '--milestone 2 --label task -m "just create a new repo with your sketch.js and a index.html. After that create a branch called gh-pages. Your microsite should then be availabale under http://YOUR-USER-NAME.github.io/YOUR-REPO-NAME"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );
    execSync(
      'ghi open "find a partner for your presentation about an artist" -u ' + names[i] + '--milestone 2 --label task -m "one of you will have to do it alone"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );
    execSync(
      'ghi open "find a date for your presentation about an artist" -u ' + names[i] + '--milestone 2 --label task -m "the doodle is here http://doodle.com/poll/wzx56v8sv5bu9b9p"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );
    execSync(
      'ghi open "find an artist to do a presentation about " -u ' + names[i] + '--milestone 2 --label task -m "please make first a proposal to @fabiantheblind"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );

    execSync(
      'ghi open "create mockup" -u ' + names[i] + '--milestone 2 --label task -m "This can be a 3D rendering, or you build something from wood or clay or paper, or you do a Photoshop session or 3D Print or whatever "', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      });
    execSync(
      'ghi open "create presentation" -u ' + names[i] + '--milestone 2 --label task -m "please as PDF if possible so we can present from the same computer. aspect ratio of the beamer is 16 × 9 Full HD 1920 × 1080"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      });

    execSync(
      'ghi open "upload presentation" -u ' + names[i] + '--milestone 2 --label task -m "add it into the folder [https://incom.org/workspace/6176/#list-f10911](https://incom.org/workspace/6176/#list-f10911)"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      });
    // execSync('ghi assign ' + Number(i+3)  + ' -u ' + names[i], {encoding:'utf8', stdio:[0,1,2]});

  } // end dariaDunkelbier exclude
});
// for (var i = 0; i < names.length -1; i++){
// }