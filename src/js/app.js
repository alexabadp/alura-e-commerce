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

//Validando input "nombre" del rodapie
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

function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch: "El nombre debe tener máximo 40 caracteres.",
  },
  mensaje: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch: "El nombre debe tener máximo 120 caracteres.",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
      console.log(input);
    }
  });
  return mensaje;
}
