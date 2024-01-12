const { src, dest, watch, parallel, series } = require("gulp");
const sass = require("gulp-dart-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");

function styles() {
  return src(["app/sass/style.sass"])
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["app/sass/style.sass"], styles);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
}

function cleanDist() {
  return src("dist").pipe(clean());
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.default = parallel(styles, browsersync, watching);
