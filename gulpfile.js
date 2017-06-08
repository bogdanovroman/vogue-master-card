var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var base64 = require('gulp-base64');


gulp.task('scss', function() {
    gulp.src('public/scss/**/*.scss')
        .pipe(sass())
        .pipe(base64({
            maxImageSize: 20 * 1024, // bytes
            debug: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css'))
});

gulp.task('min', function () {
    gulp.src('public/css/common.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css')); 
});

gulp.task('watch', ['scss'], function() {
    gulp.watch('public/scss/**/*.scss', ['scss']);
});