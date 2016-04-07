/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    rimraf = require("rimraf");

var paths = {
    webroot: "./wwwroot/",
    npm: './node_modules/',
    lib: './wwwroot/lib/',
};

var libs = [
];

gulp.task("clean:js", function (cb) {
    rimraf(paths.webroot + "app/**/*.js", cb);
});

gulp.task("clean:js.map", function (cb) {
    rimraf(paths.webroot + "app/**/*.js.map", cb);
});

gulp.task("clean", ["clean:js", "clean:js.map", "clean:css"]);

gulp.task("copy:jquery", function () {
    return gulp.src(paths.npm + '/jquery/dist/*', { base: paths.npm + '/jquery/dist/' })
        .pipe(gulp.dest(paths.lib + '/jquery/'));
});

gulp.task("copy:systemjs", function () {
    return gulp.src(paths.npm + '/systemjs/dist/**/*.*', { base: paths.npm + '/systemjs/dist/' })
    .pipe(gulp.dest(paths.lib + '/systemjs/'));
});

gulp.task("copy:rxjs", function () {
    return gulp.src(paths.npm + '/rxjs/bundles/*.*', { base: paths.npm + '/rxjs/bundles/' })
        .pipe(gulp.dest(paths.lib + 'rxjs/'));
});

gulp.task("copy:react", function () {
    gulp.src(paths.npm + '/react/dist/**/*.js', { base: paths.npm + '/react/dist/' })
        .pipe(gulp.dest(paths.lib + '/react/'));

    gulp.src(paths.npm + '/react-dom/dist/**/*.js', { base: paths.npm + '/react-dom/dist/' })
        .pipe(gulp.dest(paths.lib + '/react/'));
});

gulp.task("copy", ["copy:systemjs", "copy:react", "copy:rxjs"]);

gulp.task('default', ["clean", "copy"]);