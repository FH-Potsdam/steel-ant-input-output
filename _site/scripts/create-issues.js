// the ghi used is
// https://github.com/stephencelis/ghi
// install via brew install ghi
//
// not this one
// https://github.com/macroscope/ghi
var execSync = require('child_process').execSync;
var names = ["antsteelmule", "dziewi", "josues", "Logetcrea", "lpaubielsa", "martakarta", "miduku", "nikoripka", "Ninotschka", "Ourelius", "Q-rec", "swjo", "vogelino", "wollemannone", "dariaDunkelbier"];

// currently dariaDunkelbier is still not a team member
// names.forEach(function(element, i, array) {
  // if (element !== 'dariaDunkelbier') {
  for (var i = 0; i < names.length ; i++){

    // console.log(element);
    execSync('echo " creating issue for "' + names[i], {
      encoding: 'utf8',
      stdio: [0, 1, 2]
    });
    // create a new issue and add it to the milestone
    execSync(
      'ghi open "Prepare a 7 minute presentation of your concept" -u ' + names[i] + ' --milestone 4 --label task -m "What data will you put the ISS data in relation to? Take a look at http://open-notify.org/ to see whats possible"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );
    // execSync(
    //   'ghi open "Create a microsite for your dataset" -u ' + names[i] + ' --milestone 4 --label task -m "as mentioned on incom post https://incom.org/post/161133"', {
    //     encoding: 'utf8',
    //     stdio: [0, 1, 2]
    //   }
    // );
    // execSync('ghi assign ' + Number(i+3)  + ' -u ' + names[i], {encoding:'utf8', stdio:[0,1,2]});

  // } // end dariaDunkelbier exclude
// });
}