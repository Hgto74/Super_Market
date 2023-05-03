let listaProductos = [];

//objeto productos
const objProducto = {
    id: '',
    nombre: '',
    precio: '',
    cantidad: ''
}
//variable editando
let editando = false;
//constantes para el  formulario
const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const precioInput = document.querySelector('#precio');
const cantidadInput = document.querySelector('#cantidad');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);
// funcion para validar el  formulario no permite campos vacios
function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === '' || precioInput.value === '' || cantidadInput.value === '') {
        alert('Existen campos vacios');
        return;
    }

    if(editando) {
        editarProducto();
        editando = false;
    } else {
        objProducto.id = Date.now();
        objProducto.nombre = nombreInput.value;
        objProducto.precio = precioInput.value;
        objProducto.cantidad = cantidadInput.value;

        agregarProducto();
    }
}
// insertar productos
function agregarProducto() {

    listaProductos.push({...objProducto});

    mostrarProducto();

    formulario.reset();
    limpiarObjeto();
}
//limpia input del  formulario
function limpiarObjeto() {
    objProducto.id = '';
    objProducto.nombre = '';
    objProducto.precio = '';
    objProducto.cantidad = '';
}
//Listar productos
function mostrarProducto() {
    limpiarHTML();

    const divProductos = document.querySelector('.div-productos');
    
    listaProductos.forEach(producto => {
        const {id, nombre, precio, cantidad} = producto;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${precio} - ${cantidad} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarProducto(producto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarProducto(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divProductos.appendChild(parrafo);
        divProductos.appendChild(hr);
    });
}
//funcion carga productos
function cargarProducto(producto) {
    const {id, nombre, precio, cantidad} = producto;

    nombreInput.value = nombre;
    precioInput.value = precio;
    cantidadInput.value = cantidad;

    objProducto.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}
//funcion editar productos
function editarProducto() {

    objProducto.nombre = nombreInput.value;
    objProducto.precio = precioInput.value;
    objProducto.cantidad = cantidadInput.value;

    listaProductos.map(producto => {

        if(producto.id === objProducto.id) {
            producto.id = objProducto.id;
            producto.nombre = objProducto.nombre;
            producto.precio = objProducto.precio;
            producto.cantidad = objProducto.cantidad;

        }

    });

    limpiarHTML();
    mostrarProducto();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}
//funcion elimina productos
function eliminarProducto(id) {

    listaProductos = listaProductos.filter(producto => producto.id !== id);

    limpiarHTML();
    mostrarProducto();
}
//funcion limpiar
function limpiarHTML() {
    const divProductos = document.querySelector('.div-productos');
    while(divProductos.firstChild) {
        divProductos.removeChild(divProductos.firstChild);
    }
}