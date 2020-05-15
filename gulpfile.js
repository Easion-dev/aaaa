let gulp =require("gulp");

gulp.task("default",async()=>{
    gulp.watch("./*.html",async()=>{
        gulp.src("./*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei\\HUAWEIku"));
    })

    gulp.watch("./js/*.js",async()=>{
        gulp.src("./js/*.js")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei\\HUAWEIku\\js"))
    })

    gulp.watch("./php/**/*",async()=>{
        gulp.src("./php/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei\\HUAWEIku\\php"))
    })
    gulp.watch("./img/**/*",async()=>{
        gulp.src("./img/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei\\HUAWEIku\\img"))
    })
    gulp.watch("./css/*.css",async()=>{
        gulp.src("./css/*.css")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei\\HUAWEIku\\css"))
    })
    

})