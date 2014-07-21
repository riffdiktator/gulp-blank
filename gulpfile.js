var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('default',function(){
    connect.server({
        root: 'dist',
        port: 8888,
        livereload: {
            port: 8888
        }
    })
});