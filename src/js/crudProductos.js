import { valida } from "./validaciones.js";

const urlImagen = document.querySelector(".url-producto");
const categoria = document.querySelector(".categoria-producto");
const nombreProducto = document.querySelector(".nombre-producto");
const precioProducto = document.querySelector(".precio-producto");
const descripcionProducto = document.querySelector(".descripcion-producto");

urlImagen.addEventListener("blur", function (e) {
  e.preventDefault();
  valida(e.target);
});
categoria.addEventListener("blur", function (e) {
  e.preventDefault();
  valida(e.target);
});
nombreProducto.addEventListener("blur", function (e) {
  e.preventDefault();
  valida(e.target);
});
precioProducto.addEventListener("blur", function (e) {
  e.preventDefault();
  valida(e.target);
});
descripcionProducto.addEventListener("blur", function (e) {
  e.preventDefault();
  valida(e.target);
});
