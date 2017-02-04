// 引入gulp
var gulp = require("gulp");

// 引入组件
var sass   = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

// 定义任务，名为sass
// 编译sass
gulp.task('sass', function() {
	gulp.src('./scss/*.scss') // 任务针对的文件
		.pipe(sass())		// 任务调用的模块
		.pipe(gulp.dest('./dist/style')); 	// 生成文件
});

// 合并压缩文件
gulp.task('scripts', function() {
	gulp.src('./js/*.js')
		.pipe(concat('index.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(rename('index.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'));
});

// 默认任务
gulp.task('default', function(){
	gulp.run('sass', 'scripts');

	// 监听文件变化
	gulp.watch(['./js/*.js','./scss/*.scss'], function(){
		gulp.run('sass', 'scripts');
	});
});