const listaProductos = () => {
  const datos = fetch("http://localhost:3000/productos").then((respuesta) =>
    respuesta.json()
  );
  console.log("son los datos", datos);
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

export const clienteServidor = {
  listaProductos,
  crearProducto,
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
