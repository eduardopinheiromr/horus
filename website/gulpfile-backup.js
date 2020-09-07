const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const cleancss = require("gulp-clean-css");
const autoprefixer = require("autoprefixer");
const purgecss = require("gulp-purgecss");
const modernizr = require("gulp-modernizr");
const uglify = require("gulp-uglify");
const gulpif = require("gulp-if");
const useref = require("gulp-useref");
const { src, series, parallel, dest, watch } = require("gulp");

const jsPath = "./js/**/*.js";
const cssPath = "./css/**/*.css";
const htmlPath = "./*.html";

function copyHtml() {
  return src("*.html").pipe(gulp.dest("_dist"));
}

function imgTask() {
  return src("img/**/*").pipe(imagemin()).pipe(gulp.dest("_dist/img"));
}

function jsTask() {
  console.log(">>> Executando jsTask");
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(modernizr())
    .pipe(terser())
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(dest("_dist/js"));
}

// Para configurar as opções de minificação do cleanCss, basta alterar o options no final do gulpfile

function cssTask() {
  const plugins = [autoprefixer()];
  console.log(">>> Executando cssTask");

  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat("all.min.css"))
    .pipe(
      purgecss({
        content: ["*.html"],
      })
    )
    .pipe(postcss(plugins))
    .pipe(cleancss(options))
    .pipe(sourcemaps.write("."))
    .pipe(dest("_dist/css"));
}

function watchTask() {
  watch([htmlPath, cssPath, jsPath], { interval: 1000 }, parallel(useRef));
}

function useRef() {
  return gulp
    .src("./*.html")
    .pipe(useref())
    .pipe(gulpif("./js/**/*.js", jsTask()))
    .pipe(gulpif("./css/**/*.css", cssTask()))
    .pipe(gulp.dest("_dist"));
}

exports.jsTask = jsTask;
exports.cssTask = cssTask;
exports.copyHtml = copyHtml;
exports.useRef = useRef;

exports.default = series(parallel(imgTask, useRef), watchTask);

// Opções do cleanCSS
const options = {
  level: {
    2: {
      mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
      mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
      mergeMedia: true, // controls `@media` merging; defaults to true
      mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
      mergeSemantically: false, // controls semantic merging; defaults to false
      overrideProperties: true, // controls property overriding based on understandability; defaults to true
      removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
      reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
      removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
      removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
      removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
      removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
      restructureRules: false, // controls rule restructuring; defaults to false
      skipProperties: [], // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
    },
  },
};
