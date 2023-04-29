import { clienteServidor } from "../cliente-servidor.js";

const producto = document.querySelector("[data-form]");

producto.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = document.querySelector("[url-producto]").value;
  const categoria = document.querySelector("[categoria-producto]").value;

  console.log(categoria);

  const nombre = document.querySelector("[nombre-producto]").value;
  const precio = document.querySelector("[precio-producto]").value;
  const mensaje = document.querySelector("[mensaje-producto]").value;

  clienteServidor
    .crearProducto(url, categoria, nombre, precio, mensaje)
    .then(() => {
      window.location.href = "/administrador.html";
    })
    .catch((err) => console.log(err));
});
