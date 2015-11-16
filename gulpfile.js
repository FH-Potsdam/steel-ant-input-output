// gulpfile.js
// require('require-dir')('./gulp-tasks');
var gulp = require('gulp');
var test = require('./gulp-tasks/test');
// var deploy = require('./gulp-tasks/deploy');
var ghPages = require('gulp-gh-pages');

// Load all tasks from folder `gulp-tasks`
gulp.task('test', function() {
  // place code for your default task here
test(gulp);
});

gulp.task('deploy',function(){
   return gulp.src('./**/*')
    .pipe(ghPages());
});

// gulp.task('deploy', function() {
//   // place code for your default task here
// deploy(gulp);
// });


// use it!
// gulp.watch('', ['test']);