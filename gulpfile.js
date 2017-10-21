// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');
var babelCore = require("babel-core");

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('assets/sass/all.sass')
        .pipe(sass())
        .pipe(gulp.dest('src'))
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('src'))
        .pipe(livereload())
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('assets/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('src'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('src'))
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('src'))
        .pipe(livereload())
});

// Watch Files For Changes
gulp.task('watch', function() {
    // livereload.listen();
    gulp.watch('assets/js/*.js', ['scripts']);
    gulp.watch('assets/sass/*.sass', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);
