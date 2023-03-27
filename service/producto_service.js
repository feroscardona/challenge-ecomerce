import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

//muesta los productos 
const listaProductos=()=>fetch("http://localhost:3000/producto").then(respuesta =>respuesta.json());


//crea los produtos
const crearProducto = (img, nombrecategoria, name, valor, descripcion) => {
    
    const categoria = nombrecategoria.replace(/\s+/g, '').toLowerCase();
    const options = { useGrouping: true};
    const precio = parseInt(valor).toLocaleString('es-ES', options)
    const imgUrl = "imagenes/" + img.replace(/^.*\\/, '');
    

   return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-type":"application/json",
        },
        
        body: JSON.stringify({ imgUrl, categoria, name, precio, descripcion, id: nanoid(10) }),
    });
};

//elimina los productos
const deletProducto =(id)=>{
    console.log("eliminar  "+id)
    return fetch(`http://localhost:3000/producto/${id}`,{
        method:"DELETE"
    })
}

//obtener producto para editar
const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta=>respuesta.json())
}

//editar cliente
const editarCliente = (img, nombrecategoria, name, precios, descripcion,id)=>{
    const categoria = nombrecategoria.replace(/\s+/g, '').toLowerCase();
    const options = { useGrouping: true};
    const precio = parseInt(precios).toLocaleString('es-ES', options)
    const imgUrl = "imagenes/" + img.replace(/^.*\\/, '');
    
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "PUT",
        headers: {
            "Content-type":"application/json",
        },
        
        body: JSON.stringify({ imgUrl, categoria, name, precio, descripcion,id}),
    }).then(respuesta=>respuesta).catch(error=>alert(error))
}


export const servicioClientes = {
    listaProductos,
    crearProducto,
    deletProducto,
    detalleProducto,
    editarCliente

};

