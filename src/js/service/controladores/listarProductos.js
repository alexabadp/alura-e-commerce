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
              <ul class="box-iconos">  
                <li>
                  <a class="button--edit">
                    <i class="fa-solid fa-pen"></i>
                  </a>
                </li>
                <li>
                  <button class="button--delete" type="button" id=${id}>
                    <i class="fa-sharp fa-solid fa-trash"></i>
                  </button>
                </li>
              </ul>
            </div>
            <p>${nombre}</p>
            <h3>${precio}</h3>
            <a href="#">Ver producto</a>
            <br />
            <br />
          </div>
  `;

  producto.innerHTML = contenido;
  const btnEdit = producto.querySelector("button");
  btnEdit.addEventListener("click", () => {
    const id = btnEdit.id;
    clienteServidor
      .eliminarProducto(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrio un error"));
  });

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
