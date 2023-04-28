document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  scrollNav();
}

function scrollNav() {
  const enlaces = document.querySelector(".btn-productos");
  enlaces.addEventListener("click", function (e) {
    e.preventDefault();
    const seccionScroll = e.target.attributes.href.value;
    console.log(seccionScroll);
    const seccion = document.querySelector(seccionScroll);
    seccion.scrollIntoView({ behavior: "smooth" });
  });
}

// Probando validaciones

// Validando en rodapie
//Validando input "nombre" del rodapie

import { valida } from "./validaciones.js";

const inputRodapie = document.querySelector(".rodapie-nombre");

const textAreaRodapie = document.querySelector(".rodapie-mensaje");

inputRodapie.addEventListener("blur", function (e) {
  e.preventDefault();
  valida(e.target);
});

textAreaRodapie.addEventListener("blur", function (e) {
  e.preventDefault();
  valida(e.target);
});
