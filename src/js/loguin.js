import { valida } from "./validaciones.js";

const email = document.querySelector(".email-loguin");
const password = document.querySelector(".contraseña-loguin");

email.addEventListener("blur", function (e) {
  e.preventDefault();
  console.log(e.target);
  valida(e.target);
});

password.addEventListener("blur", function (e) {
  e.preventDefault();
  valida(e.target);
});

// Verificacion de email y password

const button = document.querySelector(".btn-loguin");
const datos = document.querySelector(".datos-invalidos");

button.addEventListener("click", (e) => {
  e.preventDefault();

  //   console.log(email.target);
  console.log(email);
  if (email.value == "alex@abad.com") {
    if (password.value == "Abad123") {
      window.location.href = "crud-productos.html";
    } else {
      datos.innerHTML = "credenciales incorrectas";
    }
  } else {
    datos.innerHTML = "credenciales incorrectas";
  }
});
