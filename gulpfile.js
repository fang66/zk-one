/**
 * Created by Admin on 2017/10/9.
 */
var gulp=require("gulp");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var minifycss=require("gulp-minify-css");
var webserver=require("gulp-webserver");
gulp.task("js",function(){
    gulp.src("./js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(minifycss())
        .pipe(gulp.dest("./js"));
});
gulp.task("server",function(){
    gulp.src("./js")
        .pipe(webserver({
            port:8090,
            host:"localhost",
            livereload:true,
            directorylisting:{
                path:"./js/",
                enable:true
            }

        }))
})