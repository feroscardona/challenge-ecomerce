import { servicioClientes } from "../service/producto_service.js";

const formulario = document.querySelector("[data-form]");

 const obtenerInformacion = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        Swal.fire({
            title: 'Ocurrio un error intentelo mas tarde',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            }).then(() => {
            
                window.location.href = "./productos.html"
            
          });  
    };
    
    const categoria = document.querySelector("[data-Categoria]");
    const name = document.querySelector("[data-name]");
    const precio = document.querySelector("[data-pesio]");
    const descripcion = document.querySelector("[data-descripcion]");

    servicioClientes.detalleProducto(id).then((producto)=>{
        
        categoria.value = producto.categoria ;
        name.value = producto.name;
        precio.value = producto.precio.toString().replace(/[,\.]/g, '');
        descripcion.value = producto.descripcion;

    })
}

obtenerInformacion()

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    const imgUrl = document.querySelector("[data-img]").value
    const categoria = document.querySelector("[data-Categoria]").value
    const name = document.querySelector("[data-name]").value
    const precio = document.querySelector("[data-pesio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    

    servicioClientes.editarCliente(imgUrl,categoria,name,precio,descripcion,id).then( ()=>{
       window.location.href = "./productos.html"
       
    });
})


