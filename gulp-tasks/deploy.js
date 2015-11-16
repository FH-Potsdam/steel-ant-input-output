var ghPages = require('gulp-gh-pages');
module.exports = function(gulp){
  return gulp.src('./**/*')
    .pipe(ghPages());
};