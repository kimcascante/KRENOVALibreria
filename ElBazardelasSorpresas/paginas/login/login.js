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
        Swal.fire({
            'icon': 'success',
            'title': 'Inicio de sesión exitoso',
            'text': 'Bienvenido al Bazar de las Sorpresas!'
        }).then(() => {
            //Redirecciona al landing page del Bazar
            window.location.href = '../landingPageBazar.html'
        });

    };
}

//imprimir();

botonRegistrar.addEventListener('click', validar);