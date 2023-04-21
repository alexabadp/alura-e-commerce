const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  src("src/scss/**/*.scss") //Identifica el archivo
    .pipe(sass()) //compilarlo
    .pipe(dest("build/css")); //guarda en la memoria

  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css);

  done();
}

exports.css = css;
exports.dev = dev;
