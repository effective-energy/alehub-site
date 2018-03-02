var gulp = require('gulp');
var notify = require('gulp-notify');
var stylus = require('gulp-stylus');

gulp.task('stylus', function() {
  gulp.src('./less/*.styl')
  .pipe(stylus())
  .on('error', notify.onError('!'))
  .pipe(gulp.dest('./less'));
});

gulp.task('watch', function () {
    gulp.watch('./less/*.styl', ['stylus']);
});

gulp.task('default', ['watch']);