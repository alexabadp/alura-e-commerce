const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(done) {
  src("src/scss/**/*.scss") //Identifica el archivo
    .pipe(sass()) //compilarlo
    .pipe(plumber()) //para evitar detener el gulp ante algun error
    .pipe(dest("build/css")); //guarda en la memoria

  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css); // Observar los cambios y actualizarlos

  done();
}

exports.css = css;
exports.dev = dev;
