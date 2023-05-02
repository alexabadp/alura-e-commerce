const listaProductos = () => {
  const datos = fetch("http://localhost:3000/productos").then((respuesta) =>
    respuesta.json()
  );
  return datos;
};

const crearProducto = (url, categoria, nombre, precio, descripcion) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      categoria,
      nombre,
      precio,
      descripcion,
      id: uuid.v4(),
    }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarProducto = (
  url,
  categoria,
  nombre,
  precio,
  descripcion,
  id
) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, categoria, nombre, precio, descripcion }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clienteServidor = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};

// const crearNuevoProducto = (nombre, email) => {
//   const linea = document.createElement(`DIV`);
//   const contenido = `<h1>PRUEBA DE CRUD CON EL NOMBRE: ${nombre}</h1>`;

//   linea.innerHTML = contenido;
//   return linea;
// };

// const producto = document.querySelector("[data-producto]");

// const http = new XMLHttpRequest();

// http.open("GET", "http://localhost:3000/productos");

// http.send();

// http.onload = () => {
//   const data = JSON.parse(http.response);

//   data.forEach((e) => {
//     const nuevaLinea = crearNuevoProducto(e.nombre, e.email);
//     producto.appendChild(nuevaLinea);
//   });
// };
