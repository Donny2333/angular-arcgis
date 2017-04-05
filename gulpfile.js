/**
 * Created by Donny on 17/3/20.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("js", function () {
    return gulp.src(["./js/*.js", "./js/*/*.js"])
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./build/"));
});

gulp.task('serve', ["js"], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch([
        "*.html",
        "tpls/*.html",
        "css/*.css",
        "json/*.json"
    ], ["reload"]);

    gulp.watch([
        "js/*.js",
        "js/**/*.js"
    ], ["js", "reload"]);
});

gulp.task("reload", function () {
    browserSync.reload();
});

gulp.task('default', ['serve']);