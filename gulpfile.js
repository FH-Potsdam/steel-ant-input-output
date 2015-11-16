// gulpfile.js
// require('require-dir')('./gulp-tasks');
var gulp = require('gulp');
var test = require('./gulp-tasks/test');
var deploy = require('./gulp-tasks/deploy');
// Load all tasks from folder `gulp-tasks`
gulp.task('test', function() {
  // place code for your default task here
test(gulp);
});

gulp.task('deploy', function() {
  // place code for your default task here
deploy(gulp);
});


// use it!
// gulp.watch('', ['test']);