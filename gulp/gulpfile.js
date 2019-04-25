'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync'),       // 监控文件有改动页面随之变动
  uglify = require('gulp-uglify'),             // 压缩js
  less = require('gulp-less'),                 // 编译less文件成css文件
  autoprefixer = require('gulp-autoprefixer'), // 为css文件添加浏览器前缀
  cleanCSS = require('gulp-clean-css'),        // 压缩css文件
  plumber = require('gulp-plumber'),          // 阻止gulp插件发生错误导致进程退出并输出错误日志
  javascriptObfuscator = require('gulp-javascript-obfuscator');

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: ['./dist']
    },
    port: 2000
  });

  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('dist/**/*.html').on('change', browserSync.reload);
});

// 编译less文件，并自动注入到浏览器
gulp.task('less', function () {
  return gulp.src('src/less/index.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({browsers: ['ie 8', 'last 2 versions', 'Android >= 2.3', 'iOS >= 7']}))
    .pipe(gulp.dest('src/css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify({ mangle: false }))
    .pipe(javascriptObfuscator())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
})

// 处理 html 文件
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['html', 'server']);
