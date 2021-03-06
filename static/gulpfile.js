var gulp = require('gulp');
var notify = require('gulp-notify');
var stylus = require('gulp-stylus');

gulp.task('stylus', function() {
  gulp.src('./styles/stylus/*.styl')
  .pipe(stylus())
  .on('error', notify.onError('!'))
  .pipe(gulp.dest('./styles/css'));
});

gulp.task('watch', function () {
    gulp.watch('./styles/stylus/*.styl', ['stylus']);
});

gulp.task('default', ['watch']);