//Constantes para extraer datos del formulario HTML
const botonRegistrar = document.getElementById('btn-ingresar');
const inputCorreo = document.getElementById('txt-correo');
const inputContrasenna = document.getElementById('txt-contrasenna');

const imprimir = () => {
    let correo = inputCorreo.value;
    let contrasenna = inputContrasenna.value;

    console.log('El correo es:', correo);
    console.log('La contraseña es:', contrasenna);

};


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
            'title': 'Inicio de sesión fallido',
            'text': 'Usuario o contraseña inválidos'
        });
    } else {
        /*Swal.fire({
            'icon': 'success',
            'title': 'Inicio de sesión exitoso',
            'text': 'Bienvenido al Bazar de las Sorpresas!' * /
        })*/
        /*.then(() => {*/
        //Redirecciona al landing page del Bazar

        if (inputCorreo.value == 'jmadriz@gmail.com' && inputContrasenna.value == 'madriz123') {
            window.location.href = 'landingPageBazarRegistrado.html'

        } else if (inputCorreo.value == 'pcastillo@gmail.com' && inputContrasenna.value == 'paola123') {
            window.location.href = 'landingPageBazarAdministrador.html'

        } else {
            Swal.fire({
                'icon': 'warning',
                'title': 'Inicio de sesión fallido',
                'text': 'Usuario o contraseña inválidos'
            })
        }

        /* });*/
    };
}

//imprimir();

botonRegistrar.addEventListener('click', validar);