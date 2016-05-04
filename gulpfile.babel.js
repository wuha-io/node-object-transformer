'use strict';

import gulp from 'gulp';
import gulpLoad from 'gulp-load-plugins';
import seq from 'run-sequence';
import colors from 'colors';

const plugins = gulpLoad();
const basePath = __dirname;

const dirs = {
  src: basePath + '/src',
  build: basePath + '/build',
  test: basePath + '/test'
};

const glob = {
  src: dirs.src + '/**/*.js',
  build: dirs.build + '/**/*.js',
  test: dirs.test + '/**/*.js'
};

const onError = err => {
  console.error(err.message.bold.red);
  process.exit(1);
};

gulp.task('pre-clean', () => {
  return gulp.src(glob.build)
    .pipe(plugins.clean())
    .once('error', onError);
});

gulp.task('compile', () => {
  return gulp.src(glob.src)
    .pipe(plugins.babel({ presets: [ 'es2015' ] }))
    .pipe(gulp.dest(dirs.build))
    .once('error', onError);
});

gulp.task('jshint', () => {
  return gulp.src(glob.src)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .once('error', onError);
});

gulp.task('test', () => {
  return gulp.src(glob.test, { grep: /^_/i, read: false })
  .pipe(plugins.mocha({ reporter: 'spec' }))
  .once('error', onError);
});

gulp.task('default', () => {
  gulp.watch(glob.src, [ 'build' ]);
  gulp.watch(glob.test, [ 'test' ]);
});

gulp.task('build', cbk => seq('jshint', 'test', 'pre-clean', 'compile', cbk));
