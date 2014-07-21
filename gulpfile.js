var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    sass = require('gulp-compass');

gulp.task('connect',function(){
    connect.server({
        root: 'dist',
        port: 8889,
        livereload: {
            port: 8888
        }
    })
});
gulp.task('jade', function(){
    gulp.src('./src/pages/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass({
            config_file: 'config.rb',
            css: './dist/styles/',
            sass: './src/sass/'
        }))
        .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch(['./src/pages/**/*.jade'], ['jade']);
    gulp.watch(['./src/sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['connect', 'watch']);

