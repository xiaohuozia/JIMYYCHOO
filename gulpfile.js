var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("copy-html",async function(){
    gulp.src("mainPage.html")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last"));
});
gulp.task("copyallfile",async function(){
	gulp.src("*/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last"));
});

// gulp.task("watchall",async ()=>{

// 		gulp.watch("*.html",async ()=>{
// 			gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last"));
// 		});

// 		gulp.watch("css/*.css",async ()=>{
// 			gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last"));
// 		});

// 		gulp.watch("js/*.js",async ()=>{
// 			gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last"));
// 		});

// })


//自动生成sass编译后文件
gulp.task("sass",function(){
    return gulp.src("sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last"));
});

gulp.task("watchall",async ()=>{
    //定义一个监听器，监听文件是否有改变，如果有改变，则自动拷贝。
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last"));
    });

    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last\\js"));
    });

    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\zyj_last\\css"));
    });

    gulp.watch("sass/**/*.scss",async ()=>{
        gulp.src("sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("E:\\H5-1908\\secondStep\\JIMYY CHOO\\css"));
    });



	
});