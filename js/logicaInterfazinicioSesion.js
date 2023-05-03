/* Captura de informacion del  form de acceso y redireccionamos a la pagina de admin de 
productos
*/

// evento boton de ingresar llama la funcion de inicio de sesion
document.querySelector('#buttton1').addEventListener('click', iniciarSesion);

// funcion inicio de sesion para leer y capturar los datos 
// variable bAcceso tendra el  resultado  de la funcion validar credenciales al pasar de leer los campos de usuario y contraseña
function iniciarSesion(){
    var sCorreo = '';
    var sContrasenna = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#username').value;
    sContrasenna = document.querySelector('#password').value;

    bAcceso = validarCredenciales(sCorreo,sContrasenna);
    //console.log(bAcceso);
    if(bAcceso == true){
        ingresar();        
    }
}

    

// funcion redireccionar a la pagina que corresponda segun el rol del usuario
function ingresar(){
    var rol = sessionStorage.getItem('rolusuarioActivo');
    switch(rol){
        case '1':
            window.location.href = 'adminProductos.html';
        break;
        case '2':
            window.location.href = 'index.html';
        break;
        default:
            window.location.href = 'ofertas.html';


    }
}