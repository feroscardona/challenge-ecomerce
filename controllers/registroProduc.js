import { servicioClientes } from "../service/producto_service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const imgUrl = document.querySelector("[data-img]").value
    const categoria = document.querySelector("[data-Categoria]").value
    const name = document.querySelector("[data-name]").value
    const precio = document.querySelector("[data-pesio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    

    servicioClientes.crearProducto(imgUrl,categoria,name,precio,descripcion).then(()=>{
        window.location.href = "./productos.html"
    }).catch(error=>alert(error));
})