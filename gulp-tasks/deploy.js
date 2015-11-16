var git = require('gulp-git');
var os      = require('os');
var package = require('../package.json');
var path    = require('path');
var ghPages = require('gulp-gh-pages');

module.exports = function(gulp) {
 return gulp.src('./**/*')
    .pipe(ghPages());

};