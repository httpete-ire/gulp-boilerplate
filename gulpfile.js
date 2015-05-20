// load all the separate gulp files
require('require-dir')('./gulp');
var gulp = require('gulp');

// common tasks
gulp.task('client-dev', ['lint:client:watch', 'sass:watch']);
