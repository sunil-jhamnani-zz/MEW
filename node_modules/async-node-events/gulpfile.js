var gulp = require('gulp');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');
var reporter = require('gulp-coverage-reporter');

function test(globs) {
  gulp.src(globs, {read: false})
  .pipe(cover.instrument({
    pattern: 'lib/**/*.js'
  }))
  .pipe(mocha({
    reporter: 'spec'
  }))
  .pipe(cover.gather())
  .pipe(reporter({
    colors: [
      'red.bold', 'red.bold', 'red.bold',
      'red', 'red', 'red', 'yellow', 'yellow',
      'green', 'green.bold'
    ]
  }));
}

gulp.task('test', function() {
  return test(['test/**/*.js']);
});
