#gtask-browserify

Spend less time getting gulp browserify to work and more time writing productive code.

```js
var gulp = require('gulp');
var Bundler = require('gtask-browserify');

gulp.task('default', ['js']);

var bundler = Bundler({
    entries: ['./public/js/src/main.js'],
    dest: './public/js/dist',
    transform: ["babelify"],
});

gulp.task('js', function() {
    return bundler.bundle();
});

gulp.task('js-watch', function() {
    return bundler.watch();
})
```

## API

- `.bundle()` runs browserify
- `.watch()` runs watchify

## License
MIT
