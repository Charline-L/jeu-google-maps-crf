

const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const livereload = require('gulp-livereload')

// const uglify = require('gulp-uglify');
// const babelCore = require("babel-core");




// SASS TO CSS
gulp.task('sass', function() {
    return gulp.src( 'assets/sass/*.sass' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( rename('all.min.css') )
        .pipe( gulp.dest('src') )
        .pipe( livereload() )
});

// ES6 TO ES5
gulp.task('scripts', function() {
    return gulp.src( 'assets/js/*.js' )
        .pipe( babel( { presets: ['env'] } ) )
        .on( 'error', showError )
        .pipe( concat('all.js') )
        .on( 'error', showError )
        .pipe( rename('all.min.js') )
        .pipe( gulp.dest('src') )
        .pipe( livereload() )
});

// WATCH
gulp.task('watch', function() {
    gulp.watch( 'assets/js/*.js', ['scripts'] )
    gulp.watch( 'assets/sass/*.sass', ['sass'] )
});

// DEFAULT
gulp.task('default', ['sass', 'scripts', 'watch'])

// SHOW ERROR
function showError ( error ) {
    console.log( error.toString() )
    this.emit( 'end' )
}