


var gulp     = require('gulp'),
    minify   = require('gulp-clean-css'),
    jQ        = require('jQuery'),
    sass     = require('gulp-sass'),
    rename   = require('gulp-rename'),
    concat   = require('gulp-concat'),
    notify   = require('gulp-notify'),
    uglify   = require('gulp-uglify'),
    watch    = require('gulp-watch'),
    imagemin = require('gulp-imagemin');
    bs       = require('browser-sync');

gulp.task('default', ['browsersync', 'watch']);


gulp.task('browsersync', function () {
    bs.init({
        server: "./",
        port: 8080
    });
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['style']);
    gulp.watch('src/js/script.js', ['script']);
    bs.watch('*.html').on('change', bs.reload);
});

gulp.task('style', function() {
    return gulp.src('src/sass/main.scss', {style : 'expended'})
        .pipe(sass({includePaths: ['src/sass/**']}))
        .pipe(rename({suffix: '.min'}))
        .pipe(minify())
        .pipe(gulp.dest('css/'))
        .pipe(notify({message: 'Style task is finished'}))
        .pipe(bs.reload({stream: true}));
});

gulp.task('script', function() {
    return gulp.src('src/js/script.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
        .pipe(notify({message: 'Script task is finished'}))
        .pipe(bs.reload({stream: true}));
});

gulp.task('imagemin', function() {
    return gulp.src('src/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));
});