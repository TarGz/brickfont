var gulp        = require('gulp'),
	inject 		= require("gulp-inject"),
    gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    csso        = require('gulp-csso'),
    uglify      = require('gulp-uglify'),
    jade        = require('gulp-jade'),
    concat      = require('gulp-concat'),
    connect  	= require('gulp-connect'),
    // livereload  = require('gulp-livereload'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    tinylr      = require('tiny-lr'),
    express     = require('express'),
    copy     	= require('gulp-copy'),
    imagemin    = require('gulp-imagemin'),
    app         = express(),
    marked      = require('marked'), // For :markdown filter in jade
    path        = require('path'),
    bowerFiles 	= require('main-bower-files'),
    del 		= require('del'),
    server      = tinylr();

 

// --- Variables --- 
var source_paths = {
	scss: ['src/stylesheets/**/*.scss'],
  	script: ['src/js/**/*.js'],
  	image: ['src/img/**/*'],
  	jade: ['src/views/**/*.jade']
};

// --- Server & Reload --- 
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8080, 
    livereload: true
  });
});


// --- Clean ---
gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});


// --- Css ---
gulp.task('css', function() {
  return gulp.src('src/stylesheets/*.scss')
    .pipe( 
      sass( { 
        includePaths: ['src/stylesheets'],
        errLogToConsole: true
      } ) )
    .pipe( csso() )
    .pipe( gulp.dest('dist/assets/stylesheets/') )
    .pipe(connect.reload());
});


// --- Js ---
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe( uglify() )
    .pipe( concat('all.min.js'))
    .pipe( gulp.dest('dist/assets/js/'))
    .pipe(connect.reload());
});
 

// --- Images ---
gulp.task('images', function() {
  return gulp.src(source_paths.image)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/assets/img'));
});


// --- Jade ---
gulp.task('jade', function() {
  return gulp.src('src/views/*.jade')
    .pipe(jade({
      pretty: true
    }))	
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});
 

// --- Vendors ---
gulp.task('bootstrap_css', function() {
	return gulp.src('bower_components/bootstrap/dist/**/*.*')
  	.pipe(copy('dist/vendor',{prefix:1}));
});


// --- Watch ---
gulp.task('watch', function () {
  gulp.watch('src/**/*.jade',['jade']); 	// JADE
  gulp.watch('src/img/**/*.*',['images']); 	// IMAGES
  gulp.watch('src/js/*.js'	,['js']); 		// JS
});


// --- Tasks ---
gulp.task('build', ['clean'], function() {
    gulp.start('css', 'js', 'jade','images','vendor');
});

gulp.task('vendor', ['bootstrap_css']);

gulp.task('default', ['build'], function() {
    gulp.start('connect', 'watch');
});





