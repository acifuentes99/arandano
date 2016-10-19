var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    nodemon     = require('gulp-nodemon'),
    browserify  = require('browserify'),
    gutil       = require('gulp-util'),
    livereload  = require('gulp-livereload');

livereload({ start: true });

gulp.task('server', function () {
	nodemon({
		script: 'server.js',
		ext: 'js html',
        ignore: ['app/**/*','public/**/*', 'client/**/*']
	});
});

gulp.task('sass', function() {
    return gulp.src('private/scss/*.scss')
    //gulp.src('app/scss/*.scss')
        //.pipe(sass.sync().on('error', sass.logError))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
        .pipe(livereload());
});

gulp.task('reload', function(){
    //return gulp.src('public/js/**/*.js')
    return gulp.src('public/**/*.js')
    .pipe(livereload());
});
gulp.task('reload2', function(){
    return gulp.src('public/partials/**/*.html')
    .pipe(livereload());
});

// Concatenate & Minify JS
gulp.task('scripts2', function() {
	return gulp.src('public/controllers/*.js')
        .pipe(concat('controllers.js'))
		.pipe(gulp.dest('public/js'))
        .pipe(rename('controllers.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
	gulp.watch('public/js/**/*.js', ['reload']);
	gulp.watch('public/partials/**/*.html', ['reload2']);
    gulp.watch('private/scss/*.scss', ['sass']);
    gulp.watch('public/controllers/*.js', ['scripts2']);
});

gulp.task('default', ['server', 'scripts2', 'sass', 'watch']);

