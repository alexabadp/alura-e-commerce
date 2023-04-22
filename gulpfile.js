const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

// Imagenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
  src("src/scss/**/*.scss") //Identifica el archivo
    .pipe(sass()) //compilarlo
    .pipe(plumber()) //para evitar detener el gulp ante algun error
    .pipe(dest("build/css")); //guarda en la memoria

  done();
}

function imagenes(done) {
  const opciones = {
    optimizationLevel: 3,
  };

  src("img/**/*.{png,jpg}") //identificar
    .pipe(cache(imagemin(opciones)))
    .pipe(dest("build/img"));

  done();
}

function versionWebp(done) {
  const opciones = {
    quality: 50,
  };
  src("img/**/*.{png,jpg}") //identificar  el archivo img
    .pipe(webp(opciones)) //convertirlo a formato webp
    .pipe(dest("build/img")); //almacenarlo en el disco duro
  done();
}

function versionAvif(done) {
  const opciones = {
    quality: 50,
  };
  src("img/**/*.{png,jpg}") //identificar  el archivo img
    .pipe(avif(opciones)) //convertirlo a formato webp
    .pipe(dest("build/img")); //almacenarlo en el disco duro
  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css); // Observar los cambios y actualizarlos

  done();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, dev);
