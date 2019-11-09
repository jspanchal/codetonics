const gulp = require('gulp');

// gulp plugins and utils
const gutil = require('gulp-util');
const livereload = require('gulp-livereload');
const nodemon = require('gulp-nodemon');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const zip = require('gulp-zip');

// postcss plugins
const autoprefixer = require('autoprefixer');
const colorFunction = require('postcss-color-function');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const easyimport = require('postcss-easy-import');
const concatCss = require('gulp-concat-css');

const swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

const nodemonServerInit = function () {
    livereload.listen(1234);
};

gulp.task('build', ['css'], function (/* cb */) {
    return nodemonServerInit();
});

gulp.task('css', function () {
    const processors = [
        easyimport,
        customProperties,
        colorFunction({preserveCustomProps: false}),
        autoprefixer({browsers: ['last 5 versions']}),
        cssnano()
    ];

    return gulp.src('assets/css/*.css')
        .on('error', swallowError)
        // .pipe(sourcemaps.init())
        // .pipe(sourcemaps.write('.'))
        .pipe(concatCss("codetonics.css"))
        .pipe(postcss(processors))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['css']);
});

gulp.task('zip', ['css'], function () {
    const targetDir = 'dist/';
    const themeName = require('./package.json').name;
    const filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
