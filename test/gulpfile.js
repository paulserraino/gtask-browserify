var gulp = require('gulp');
var Bundler = require('../task');

var bundler = Bundler({
    entries: ['./source.js'],
    transform: ['babelify'],
    dest: '.'
});

gulp.task('default', function () {
    return bundler.bundle();
});
