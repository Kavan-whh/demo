'use strict';
var gulp=require('gulp');
var browserSync=require('browser-sync').create();
var reload =browserSync.reload;

var sass=require('gulp-sass');

// 静态服务器 + 监听 css/html/js文件
gulp.task('serve',function(){
  browserSync.init({
    server:'./app'
  });

  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/css/*.css').on('change',reload);
  gulp.watch('app/js/*.js').on('change',reload);
  gulp.watch('app/*.html').on('change',reload);

});

gulp.task('sass',function(){
  return gulp.src('app/scss/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('./app/css'));
})




gulp.task('default', ['serve','sass']);
