const listaProductos=()=>{const o=fetch("http://localhost:3000/productos").then(o=>o.json());return console.log("son los datos",o),o},crearProducto=(o,t,r,c,s)=>fetch("http://localhost:3000/productos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:o,categoria:t,nombre:r,precio:c,descripcion:s,id:uuid.v4()})});export const clienteServidor={listaProductos:listaProductos,crearProducto:crearProducto};
//# sourceMappingURL=cliente-servidor.js.map