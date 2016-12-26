var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sources = ['./**/*.js'];


gulp.task('scripts', function() {
    return gulp.src(sources)
        .pipe(concat('sources.js'))
        .pipe(gulp.dest('./dist/'));
});
