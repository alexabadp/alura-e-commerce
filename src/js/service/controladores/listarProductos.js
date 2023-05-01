import { clienteServidor } from "../cliente-servidor.js";

const crearNuevoProducto = (
  url,
  categoria,
  nombre,
  precio,
  descripcion,
  id
) => {
  const producto = document.createElement("DIV");

  const contenido = `
          <div class="box-producto">
            <div class="box-imagen">
              <img
                loading="lazy"
                width="200"
               height="300"
               src="${url}"
              />
              <i class="fa-sharp fa-light fa-pen"></i>
              <i class="fa-solid fa-pen"></i>
            </div>
            <p>${nombre}</p>
            <h3>${precio}</h3>
            <a href="#">Ver producto</a>
            <br />
            <br />
          </div>
  `;

  producto.innerHTML = contenido;

  return producto;
};

const contenedor = document.querySelector("[allProductos]");

clienteServidor
  .listaProductos()
  .then((data) => {
    data.forEach(({ url, categoria, nombre, precio, descripcion, id }) => {
      const listaProductos = crearNuevoProducto(
        url,
        categoria,
        nombre,
        precio,
        descripcion,
        id
      );
      contenedor.appendChild(listaProductos);
    });
  })
  .catch((error) => console.log(error));
