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
		script: 'server/server.js',
		ext: 'js html',
        ignore: ['app/**/*','public/**/*', 'client/**/*']
	});
});

gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
    //gulp.src('app/scss/*.scss')
        //.pipe(sass.sync().on('error', sass.logError))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('client/css'))
        .pipe(livereload());
});

gulp.task('reload', function(){
    return gulp.src('client/js/**/*.js')
    .pipe(livereload());
});
gulp.task('reload2', function(){
    return gulp.src('client/partials/**/*.html')
    .pipe(livereload());
});

// Concatenate & Minify JS
gulp.task('scripts2', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('client/js/**/*.js', ['reload']);
    gulp.watch('client/partials/**/*.html', ['reload2']);
    gulp.watch('app/jsx/*.js', ['scripts']);
    gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.task('default', ['server', 'sass', 'watch']);

