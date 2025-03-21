// = = = = = = = = = = 
// REQUIRES
// = = = = = = = = = = 

// BASE
import * as gulp from 'gulp';
import * as browserSync from 'browser-sync';

// JS
import concat from 'gulp-concat';

// CSS
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import * as sass from "sass";
const scss = gulpSass(sass);

// IMAGES
import image from 'gulp-image';

// DEBUG
import color from 'gulp-color';
const log = console.log;


// = = = = = = = = = = 
// TASKS
// = = = = = = = = = = 

// Default
gulp.task('default', function () {
    return new Promise(function (resolve, reject) {
        log(color('= = = = Hola GULP = = = =', 'RED'));
        resolve();
    })
});


// Images
gulp.task('image', function () {
    gulp.src('./src/imgs/**/*')
        .pipe(image())
        .pipe(gulp.dest('./app/imgs/'));
});

// HTML
gulp.task('html', function () {
    log(color('= = = = Watch HTML changes = = = =', 'YELLOW'));

    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./app/'));
})

// CSS - SASS 
gulp.task('sass', function () {
    log(color('= = = = Watch SASS changes = = = =', 'GREEN'));

    return gulp.src('./src/scss/**/*.scss')
        .pipe(scss({
            /* output style : nested | compact | expanded | compressed */
            outputStyle: 'compressed'
        }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: false
        }))
        // .pipe(cssnano())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream())
})

// JS
gulp.task('js', function () {
    log(color('= = = = Watch JS changes = = = =', 'MAGENTA'));

    return gulp.src('./src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./app/js/'));
})

// = = = = = = = = = = 
// SERVE TASKS
// = = = = = = = = = = 
gulp.task('serve', function () {
    log(color('= = = = START SERVE = = = =', 'GREEN'));

    // => Browser sync
    browserSync.init({
        server: "./app"
    });

    // => html watch
    gulp.watch("src/**/*.html", gulp.series('html'));
    gulp.watch("app/**/*.html").on('change', browserSync.reload);

    // => sass watch
    gulp.watch("src/scss/**/*.scss", gulp.series('sass'));

    // => JS watch
    gulp.watch("src/js/**/*.js", gulp.series('js'));
    gulp.watch("app/js/*.js").on('change', browserSync.reload);

})