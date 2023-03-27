import { servicioClientes } from "../service/producto_service.js";

const card = document.querySelector("[data-card]");


const crearNuevaLinea = (imgUrl,categoria,name,precio,descripcion,id)=>{
    
    const linea = document.createElement("li");
    linea.classList.add("card__list")
    const contenido =    `
                            

                                <img class="card__img" src="${imgUrl}">
                                <h3 class="card__producto">${name}</h3>
                                <p class="presio__card">$ ${precio}</p>
                                <span class="id__card">#: ${id}</span>
                                
                            
                         `;
    linea.innerHTML= contenido;
    
   
    return linea;
}

servicioClientes.listaProductos().then((data)=>{
    data.forEach(({imgUrl, categoria, name, precio ,descripcion,id})=> {
        const nuevaLinea = crearNuevaLinea(imgUrl, categoria, name, precio, descripcion, id)
        card.appendChild(nuevaLinea);
    });

}).catch((error)=>alert(error));

