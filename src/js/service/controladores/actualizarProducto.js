import { clienteServidor } from "../cliente-servidor.js";

const formulario = document.querySelector("[edit-data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    // window.location.href = "";
    alert("error de actualizacion");
  }

  const urlProducto = document.querySelector("[edit-url-producto]");
  const categoriaProducto = document.querySelector("[edit-categoria-producto]");
  const nombreProducto = document.querySelector("[edit-nombre-producto]");
  const precioProducto = document.querySelector("[edit-precio-producto]");
  const mensajeProducto = document.querySelector("[edit-mensaje-producto]");

  console.log(precioProducto.value);

  try {
    const producto = await clienteServidor.detalleProducto(id);

    if (
      producto.url &&
      producto.categoria &&
      producto.nombre &&
      producto.precio &&
      producto.descripcion
    ) {
      urlProducto.value = producto.url;
      categoriaProducto.value = producto.categoria;
      nombreProducto.value = producto.nombre;
      precioProducto.value = producto.precio;
      mensajeProducto.value = producto.descripcion;
    } else {
      throw new Error();
    }
  } catch (error) {
    // window.location.href = ''
    alert("error al actualizar");
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  console.log(id);
  console.log(url);

  const urlProducto = document.querySelector("[edit-url-producto]").value;
  const categoriaProducto = document.querySelector(
    "[edit-categoria-producto]"
  ).value;
  const nombreProducto = document.querySelector("[edit-nombre-producto]").value;
  const precioProducto = document.querySelector("[edit-precio-producto]").value;
  const mensajeProducto = document.querySelector(
    "[edit-mensaje-producto]"
  ).value;

  clienteServidor
    .actualizarProducto(
      urlProducto,
      categoriaProducto,
      nombreProducto,
      precioProducto,
      mensajeProducto,
      id
    )
    .then(() => {
      window.location.href = "../../../../administrador.html";
    });
});
