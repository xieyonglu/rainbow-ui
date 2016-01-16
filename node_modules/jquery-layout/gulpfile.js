// vim set et sw=2 ts=2
var gulp = require('gulp');

var jshint = require('gulp-jshint');
var minify = require('gulp-esmangle');
var rename = require('gulp-rename');

var del = require('del');

var minifyConfig = {
  legacy: false
};

var sourceFiles = [ 'jquery.layout.js' ];
var buildFolder = 'dist';

gulp.task('minify', function() {
  gulp.src(sourceFiles)
    .pipe(minify(minifyConfig))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(buildFolder))
});

gulp.task('lint', function (done) {
  gulp.src(sourceFiles)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .on('end', done);
});

gulp.task('clean', function (done) {
  del([ buildFolder ], done);
});

gulp.task('build', [ 'lint', 'minify' ]);

gulp.task('default', [ 'build' ]);
