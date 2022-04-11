//Constantes para extraer datos del formulario HTML
const botonContinuar = document.getElementById('btn-continuar');
const inputNombre = document.getElementById('txt-nombre');
const inputApellido = document.getElementById('txt-apellido');
const inputSegundoNombre = document.getElementById('txt-segundoNombre');
const inputTelefono = document.getElementById('txt-telefono');
const inputCorreo = document.getElementById('txt-correo');
const inputContrasenna = document.getElementById('txt-contrasenna');
const inputConfirmaContrasenna = document.getElementById('txt-confiContrasenna');
const inputIdentificacion = document.getElementById('txt-identificacion');
const inputDireccion = document.getElementById('txt-direccion');
const selectProvincia = document.getElementById('slt-provincias');
const selectCanton = document.getElementById('slt-cantones');
const selectDistrito = document.getElementById('slt-distritos');

const imprimir = () => {
    let nombre = inputNombre.value;
    let segundoNombre = inputSegundoNombre.value;
    let apellido = inputApellido.value;
    let telefono = inputTelefono.value;
    let correo = inputCorreo.value;
    let contrasenna = inputContrasenna.value;
    let confirmaContrasenna = inputConfirmaContrasenna.value;
    let identificacion = inputIdentificacion.value;

    console.log('El nombre es:', nombre);
    console.log('El segundo nombre es:', segundoNombre);
    console.log('El apellido es:', apellido);
    console.log('El telefono es:', telefono);
    console.log('El correo es:', correo);
    console.log('La contrasenna es:', contrasenna);
    console.log('La confirmacion de la contrasenna es:', confirmaContrasenna);
    console.log('La identificacion es:', identificacion);

};

const validar = () => {
    let hayError = false;
    if (inputNombre.value == '') {
        hayError = true;
    } else {}

    if (inputSegundoNombre.value == '') {
        hayError = true;
    } else {}

    if (inputApellido.value == '') {
        hayError = true;
    } else {}

    if (inputTelefono.value == '') {
        hayError = true;
    } else {}

    if (inputCorreo.value == '') {
        hayError = true;
    } else {}

    if (inputContrasenna.value == '') {
        hayError = true;
    } else {}

    if (inputConfirmaContrasenna.value == '') {
        hayError = true;
    } else {}

    if (inputIdentificacion.value == '') {
        hayError = true;
    } else {}

    if (inputDireccion.value == '') {
        hayError = true;
    } else {}

    if (selectProvincia.value == '') {
        hayError = true;
    } else {}

    if (selectCanton.value == '') {
        hayError = true;
    } else {}

    if (selectDistrito.value == '') {
        hayError = true;
    }

    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Registro fallido',
            'text': 'Datos incompletos para continuar'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Registro éxitoso',
            'text': 'Bienvenido al Bazar de las sorpresas'
        }).then(() => {
            //Redireccionar a la segunda página de registro
            window.location.href = 'landingPageBazarRegistrado.html';
        });
    }
}

botonContinuar.addEventListener('click', validar);