import { servicioClientes } from "../service/producto_service.js";
const name = document.querySelector("[data-name]");


 const obtenerInformacion = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    if(id == null){
        Swal.fire({
            title: 'Ocurrio un error intentelo mas tarde',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            }).then(() => {
            
                window.location.href = "./index.html"
            
          });  
    };
    const imgUrl = document.querySelector("[data-img]");
    const name = document.querySelector("[data-name]");
    const precio = document.querySelector("[data-pesio]");
    const descripcion = document.querySelector("[data-descripcion]");

    servicioClientes.detalleProducto(id).then((producto)=>{
        imgUrl.setAttribute("src",producto.imgUrl)
        
        name.textContent = producto.name;
        precio.textContent = producto.precio;
        descripcion.textContent = producto.descripcion;

    })
}

obtenerInformacion()
