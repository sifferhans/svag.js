var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('js', function(){
    gulp.src('src/svag.js')
        .pipe(uglify())
        .pipe(rename('svag.min.js'))
        .pipe(gulp.dest('src'));
});

gulp.task('watch:js', function(){
  gulp.watch('src/svag.js', ['js']);
});

gulp.task('dev', ['js','watch:js']);
