/* Roles de usuarios
 1: admin,
 2: Usuario genera;
*/
// almacenar datos de usuarios en el localStorage dado  que no estamos conectando  a una base de datos local
function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listausuariosLs'));
// datos de usuarios provisionales almacenados en el localStorage
    if(listaUsuarios == null){
        listaUsuarios =
        [
            // id, nombre, apellido, correo,       contraseña, fec nac,   rol
            ['1','hugo','armando','hugo@gmail.com','admin123','1974-02-28','1'],
            ['1','elvia','carolina','carolina@gmail.com','admin12345','1980-08-17','1']
        ]

    }
    return listaUsuarios;
}

// funcion para validacion de credenciales del  usuario
function validarCredenciales(pCorreo ,pContrasenna){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;
    /*
    recorrer la matriz de datos de usuario, y  comparar los datos en  caso de ser igual los datos de lista 
    de usuarios en la pocision indicada , si  coincide retorna el  acceso  a la vista de pagina = true
    ademas capturamos el  nombre y apellido del  usuario para la sesion activa en el  sessionStorage
    */
// 
    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasenna == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolusuarioActivo', listaUsuarios[i][6]);
        }
    }
    return bAcceso;

}