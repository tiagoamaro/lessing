/*
 * Lessing
 *
 * Copyright (c) 2014 Tiago Amaro
 * Licensed under the MIT license.
 */

var gulp = require('gulp');

var plumber = require('gulp-plumber');
var less = require('gulp-less');

var paths = {
  stylesheets: ['src/less/**/*.less'],
};

gulp.task('less', function() {
  gulp.src(paths.stylesheets)
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('build/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.stylesheets, ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['less']);
