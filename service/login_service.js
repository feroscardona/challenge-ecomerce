const nickname= "oscar"
const usuario = "osfer@tutienda.com";
const contraseña = "Luna28$Vio05";

const formLogin = document.querySelector("[data-login]");

formLogin.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    const usuarioIngresado = document.querySelector("[data-input=email]");
    const contraseñaIngredada = document.querySelector("[data-input=contraseña]")
    const patron1 =  usuarioIngresado.value
    const patron2 = contraseñaIngredada.value

    if ( patron1 === usuario && patron2 === contraseña){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'bienvenido ' + nickname,
            showConfirmButton: false,
            timer: 2000
          }).then(()=>window.location.href = "./productos.html")
    }else {
            Swal.fire({
                icon: 'error',
                title: 'Conraseña o Email Incorretos',
                text: 'Por favor intente de nuevo'
            })

        }
   
    
})
