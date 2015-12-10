// the ghi used is
// https://github.com/stephencelis/ghi
// install via brew install ghi
//
// not this one
// https://github.com/macroscope/ghi
//
//
var execSync = require('child_process').execSync;
var names = [/*"antsteelmule", "josues", "Logetcrea", "lpaubielsa", "martakarta", "miduku", "nikoripka", "Ninotschka", "Ourelius", "Q-rec", "vogelino", "wollemannone", "dariaDunkelbier"*/ "swjo"];

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

// Eine Github Microsite für euer Projekt einrichten (Die, die das Projekt auf einem eigenen Server laufen lassen, würde ich bitten trotzdem ein Repo anzulegen und dort auf die Live Version auf eurem Server zu verweisen.)
    execSync(
      'ghi open "Finalize your visualization" -u ' + names[i] + ' --milestone 6 --label task -m "incorporate the feedback from today (2015.12.09)"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );
    execSync(
      'ghi open "Prepare your 7 minute presentation" -u ' + names[i] + ' --milestone 6 --label task -m "Tell us your story! What is the benefit? Reflect on your work! What would you do next?"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );
    execSync(
      'ghi open "Upload your presentation to the workspace" -u ' + names[i] + ' --milestone 6 --label task -m "Please use the folder ["Endpräsentation Projekt 2"](https://incom.org/workspace/6176#list-f10912)"', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );

    execSync(
      'ghi open "create a micro site on GitHub or link to your own server with from a GitHub repo." -u ' + names[i] + ' --milestone 6 --label task -m "If you need some serverspace use [uberspace.de](https://uberspace.de/) or ask me for some space on the interface.fh-potsdam.de server."', {
        encoding: 'utf8',
        stdio: [0, 1, 2]
      }
    );
    //  execSync(
    //   'ghi open "Create a microsite for your dataset" -u ' + names[i] + ' --milestone 4 --label task -m "as mentioned on incom post https://incom.org/post/161133"', {
    //     encoding: 'utf8',
    //     stdio: [0, 1, 2]
    //   }
    // );
    // execSync('ghi assign ' + Number(i+3)  + ' -u ' + names[i], {encoding:'utf8', stdio:[0,1,2]});

  // } // end dariaDunkelbier exclude
// });
}