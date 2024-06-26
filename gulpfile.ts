import gulp from 'gulp';
import watch from 'gulp-watch';
import sass from 'sass';
import sassGulp from 'gulp-sass';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import tsify from 'tsify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import concat from 'gulp-concat';
import uglifycss from 'gulp-uglifycss';
import browserSync from 'browser-sync';

const Sassify = sassGulp(sass);
const buildRoot = 'www';

const buildAndBundleSite = (isMinified: boolean) => {
    const chain = browserify({
        entries: ["src/index.ts"],
        debug: true,
      })
      .plugin(tsify, {
        project: 'tsconfig.json',
      })  
      .transform(babelify.configure({
        presets: ['@babel/preset-typescript'],
      }))
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer());

      return (isMinified ? chain.pipe(uglify()) : chain).pipe(gulp.dest(buildRoot))
}

const buildAndBundleStyle = (isMinified: boolean) => {
    const chain = gulp.src('src/styles/global.scss')
      .pipe(Sassify())
      .pipe(concat('styles.css'))
      .pipe(gulp.dest(buildRoot));

    // Is minifed attach pipes or just skip the uglifiy
    return (isMinified ? chain.pipe(uglifycss({"maxLineLen": 80, "uglyComments": true })) : chain).pipe(gulp.dest(buildRoot))
}

gulp.task("build-and-bundle-site", () => buildAndBundleSite(false));
gulp.task('build-and-bundle-styles', () => buildAndBundleStyle(false));
gulp.task("build-minified-and-bundle-site", () => buildAndBundleSite(true));
gulp.task('build-minified-and-bundle-styles', () => buildAndBundleStyle(true));

// Watching tasks
gulp.task('build-and-bundle-site-watch', () => gulp.watch('src/**/*.ts', gulp.series('build-and-bundle-site')));
gulp.task('build-and-bundle-styles-watch', () => gulp.watch('src/**/*.scss', gulp.series('build-and-bundle-styles')));
gulp.task('copy-assets-watch', () => gulp.watch('src/assets/**/*.*', gulp.series('copy-assets')));
gulp.task('copy-statics-watch', () => gulp.watch('src/**/*.html', gulp.series('copy-statics')));

gulp.task("serve", () => {
  browserSync.init({
    server: './www'
  });

  gulp.watch("www/styles.css").on('change', browserSync.reload);
  gulp.watch("www/bundle.js").on('change', browserSync.reload);
  gulp.watch("www/index.html").on('change', browserSync.reload);
  gulp.watch("www/assets/**/*").on('change', browserSync.reload);
});

gulp.task("copy-statics", (done) => {
    return gulp
    .src('src/static/**/*', {removeBOM: false})
    .pipe(gulp.dest(buildRoot));
});

gulp.task("copy-fonts", (done) => {
  return gulp
  .src('node_modules/@fontsource/albert-sans/files/**/*', {removeBOM: false})
  .pipe(gulp.dest(buildRoot+'/assets/fonts/albertsans'));
});

gulp.task("copy-assets", (done) => {
  return gulp
  .src('src/assets/**/*', {removeBOM: false})
  .pipe(gulp.dest(buildRoot+'/assets'));
});

gulp.task("build-test", gulp.parallel([
  'build-and-bundle-site',
  'build-and-bundle-styles', 
  'copy-statics',
  'copy-assets',
  'copy-fonts'
]));


gulp.task("build-production", gulp.parallel([
  'build-minified-and-bundle-site',
  'build-minified-and-bundle-styles', 
  'copy-statics',
  'copy-assets',
  'copy-fonts'
]));

gulp.task("watch", gulp.parallel([
  'build-production',
  'build-and-bundle-site-watch',
  'build-and-bundle-styles-watch', 
  'copy-assets-watch',
  'copy-statics-watch',
  'copy-fonts',
  'serve'
]));