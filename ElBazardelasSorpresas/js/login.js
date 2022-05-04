//Constantes para extraer datos del formulario HTML
const botonIngresar = document.getElementById('btn-ingresar');
const inputCorreo = document.getElementById('txt-correo');
const inputContrasenna = document.getElementById('txt-contrasenna');
let listaUsuarios = [];
let listaUsuarioAdmin = [];


const inicializar = async() => {
    listaUsuarios = await obtenerDatos('listarUsuario');
    listaUsuarioAdmin = await obtenerDatos('listarUsuarioAdmin')


}

inicializar();



// Crear función de validación "validar"
const validar = () => {
    let hayError = false;

    if (inputCorreo.value == '') {
        hayError = true;
    } else {

    }

    if (inputContrasenna.value == '') {
        hayError = true;
    }

    //Validación final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Revise su información',
            'text': 'Complete los campos obligatorios'
        });
    } else {

        iniciosesion();


    }

};


let banderaCorreo = 0;
let banderaContrasenna = 0;
let banderaCorreoAdmin = 0;
let banderaContrasennaAdmin = 0;

//Iniciar sesión y validar contraseña
const iniciosesion = () => {
    //console.log('INICIO SESION');

    listaUsuarios.forEach(usuario => {

        if (usuario.correoElectronico == inputCorreo.value) {
            banderaCorreo = 1;

        }
        if (usuario.contrasenna == inputContrasenna.value) {
            banderaContrasenna = 1;
        } else {
            banderaContrasenna += 2;
        }
    });

    listaUsuarioAdmin.forEach(usuarioAdmi => {

        if (usuarioAdmi.correoElectronico == inputCorreo.value) {
            banderaCorreoAdmin = 1;

        }
        if (usuarioAdmi.contrasenna == inputContrasenna.value) {
            banderaContrasennaAdmin = 1;
        } else {
            banderaContrasennaAdmin += 2;
        }

    });

    if (banderaCorreo == 1 && banderaContrasenna == 1) {
        window.location.href = 'landingPageBazarRegistrado.html'

    } else if (banderaCorreoAdmin == 1 && banderaContrasennaAdmin == 1) {
        window.location.href = 'homePageAdmin.html'

    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'Fallo el inicio de sesión',
            'text': 'Usuario o contraseña incorrecto'
        });
    }



};

botonIngresar.addEventListener('click', validar);