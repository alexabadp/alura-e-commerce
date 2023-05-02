import { clienteServidor } from "../cliente-servidor.js";

const crearNuevaSeccion = (url, nombre, precio, id) => {
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
                </div>
                <p>${nombre}</p>
                <h3>$ ${precio}</h3>
                <a href="#">Ver producto</a>
                <br />
                <br />
            </div>
    `;

  producto.innerHTML = contenido;

  return producto;
};

const starWarsContenedor = document.querySelector("[starwarsProductos]");

const consolasContenedor = document.querySelector("[consolaProductos]");

const diversosContenedor = document.querySelector("[diversosProductos]");

clienteServidor
  .listaProductos()
  .then((data) => {
    const filtroSeccion = data.filter(
      (producto) => producto.categoria == "starWars"
    );

    const filtroConsolas = data.filter(
      (producto) => producto.categoria == "consolas"
    );

    const filtroDiversos = data.filter(
      (producto) => producto.categoria == "diversos"
    );

    filtroSeccion.forEach(({ url, nombre, precio, id }) => {
      const listaProductos = crearNuevaSeccion(url, nombre, precio, id);
      starWarsContenedor.appendChild(listaProductos);
    });

    filtroConsolas.forEach(({ url, nombre, precio, id }) => {
      const listaProductos = crearNuevaSeccion(url, nombre, precio, id);
      consolasContenedor.appendChild(listaProductos);
    });

    filtroDiversos.forEach(({ url, nombre, precio, id }) => {
      const listaProductos = crearNuevaSeccion(url, nombre, precio, id);
      diversosContenedor.appendChild(listaProductos);
    });
  })
  .catch((error) => console.log(error));
