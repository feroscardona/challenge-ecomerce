import { servicioClientes } from "../service/producto_service.js";

const card = document.querySelector("[data-card]");


const crearNuevaLinea = (imgUrl,categoria,name,precio,descripcion,id)=>{
    
    const linea = document.createElement("li");
    linea.classList.add("card__list")
    const contenido =    `
                            
                                <div class="card__container_btn">
                                    <button class="card__btn eliminar" id="${id}" data-delet></button>
                                    <a href="./editarProducto.html?id=${id}"><button class="card__btn editar" data-edit></button></a>
                                </div>
                                <img class="card__img" src="${imgUrl}">
                                <h3 class="card__producto">${name}</h3>
                                <p class="presio__card">$ ${precio}</p>
                                <span class="id__card">#: ${id}</span>
                                
                            
                         `;
    linea.innerHTML= contenido;
    
    const btnDelet= linea.querySelector("[data-delet]")
    btnDelet.addEventListener("click",()=>{
        const id = btnDelet.id
        servicioClientes.deletProducto(id).then(respuesta =>{
            console.log(respuesta)
        }).catch(error=>alert(error))
    });
    return linea;
}

servicioClientes.listaProductos().then((data)=>{
    data.forEach(({imgUrl, categoria, name, precio ,descripcion,id})=> {
        const nuevaLinea = crearNuevaLinea(imgUrl, categoria, name, precio, descripcion, id)
        card.appendChild(nuevaLinea);
    });

}).catch((error)=>alert(error));

