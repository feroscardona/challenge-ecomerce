import { servicioClientes } from "../service/producto_service.js";

const input = document.querySelector("[data-buscador]");
const btnSerch = document.querySelector("[data-btn]");

btnSerch.addEventListener("click",(evento)=>evento.preventDefault())

input.addEventListener("keydown",(evento)=>{
    
    if (evento.key === 'Enter') {
        evento.preventDefault();
        servicioClientes.listaProductos().then( async(data)=>{
            
            await data.forEach(({imgUrl,name,id}) => {
                
                const nuevaLinea = filtrar(imgUrl,name,id)
                const ulnode = document.querySelector("[data-busqueda]");
                ulnode.appendChild(nuevaLinea)
            });
        }).catch((error)=>alert(error));
      }
})


function  filtrar (imgUrl,name,id){

    const busqueda =  input.value.toLowerCase();
    const  nombreProductos = name.toLowerCase();
    
    if( nombreProductos.indexOf(busqueda) !== -1){
            const linea = document.createElement("li");
            linea.classList.add("serch")
            const contenido =`<div>
                            <img src="${imgUrl}"width="30" height="40" alt="posillo-blanco">
                            </div>
                            <div>
                            <h6>${name}</h6>
                            <h6><a href="/productoDetalle.html?id=${id}"></href>Ver producto</a></h6>
                            </div>`;
                            
            linea.innerHTML= contenido; 
            
            return linea
            
        }else{
            const linea = document.createElement("li"); 
            
            return linea 
            
        } 
        
                          
  
}
document.querySelector("body").addEventListener("click", function(event) {
    console.log("Se hizo clic en el body!");
    const ulnode = document.querySelector("[data-busqueda]");
    ulnode.remove();
    const lista = document.createElement("lu"); 
    
    lista.dataset.busqueda = "";
    lista.classList.add("buscador__respuesta")
    const divCrea = document.querySelector("[data-crea]");
    divCrea.appendChild(lista)
    console.log(divCrea)
});


    
//  seccion.scrollIntoView({behavior: "smooth"});
