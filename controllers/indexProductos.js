import { servicioClientes } from "../service/producto_service.js";


const crearNuevaLinea = (imgUrl,categoria,name,precio,id)=>{
    const dato = document.querySelectorAll("[data-productos]");
    let categoriaExiste =false;
    dato.forEach((dato)=> {
       
        
        if (dato.dataset.productos === categoria) {
        categoriaExiste = true;
        }
            
    });
    let linea;
    let num = 1;

    if (!categoriaExiste) {
        const linea = document.createElement("section");
        linea.classList.add(categoria)
        const contenido =`
                        <div class="titulos__seccion-card">
                            <h2 id=${categoria}>${categoria}</h2>
                            <p> <a href="./todosLosProductos.html">Ver todo ➔</a></p>
                        </div>
                        <ul class="contenedor__card" data-productos=${categoria}>
                            <li>
                            <img src="${imgUrl}" alt="posillo-blanco">
                            <h3>${name}</h3>
                            <p>$ ${precio}</p>
                            <h4><a href="/productoDetalle.html?id=${id}"></href>Ver producto</a></h4>
                            </li>
                        </ul>`;
        linea.innerHTML= contenido;  
         num = 2;             
        return {linea,num};
    }else if(categoriaExiste){
        const linea = document.createElement("li");
        const contenido =`
                        <img src="${imgUrl}" alt="posillo-blanco">
                        <h3>${name}</h3>
                        <p>$ ${precio}</p>
                        <h4><a href="/productoDetalle.html?id=${id}"></href>Ver producto</a></h4>`;
        linea.innerHTML= contenido;  
        num = 1;            
        return {linea,num};
    }
};


servicioClientes.listaProductos().then((data)=>{
    data.forEach(({imgUrl, categoria, name, precio ,id})=> {
        
        const card = document.querySelector(`[data-productos=${categoria}]`);
        
        const nuevaLinea = crearNuevaLinea(imgUrl, categoria, name, precio, id)
        
        if(nuevaLinea.num == 1){
            const card = document.querySelector(`[data-productos=${categoria}]`); 
            card.appendChild(nuevaLinea.linea);
        }else if(nuevaLinea.num == 2){
            const section = document.querySelector("main");
            section.appendChild(nuevaLinea.linea);
            
        }
        
        
    });
    
}).catch((error)=>alert(error));

