let gulp =require("gulp");

gulp.task("default",async()=>{
    gulp.watch("./*.html",async()=>{
        gulp.src("./*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei"));
    })

    gulp.watch("./js/*.js",async()=>{
        gulp.src("./js/*.js")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei"))
    })

    gulp.watch("./php/**/*",async()=>{
        gulp.src("./php/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei\\php"))
    })
    gulp.watch("./img/**/*",async()=>{
        gulp.src("./img/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei\\img"))
    })
    gulp.watch("./css/*.css",async()=>{
        gulp.src("./css/*.css")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pr_huawei\\css"))
    })
    

})