const botonCambiar = document.getElementById('btn-ingresar');
const inputCorreo = document.getElementById('txt-correo');
const inputAntiguaContrasenna = document.getElementById('txt-contrasenna');
const inputNuevaContrasenna = document.getElementById('txt-nuevaContrasenna');
const inputConfirmarContrasenna = document.getElementById('txt-confirmarNuevaContrasenna');

const validar = () => {
    let hayError = false;

    if (inputCorreo.value == '') {
        hayError = true;
    } else {}

    if (inputAntiguaContrasenna.value == '') {
        hayError = true;
    } else {}

    if (inputNuevaContrasenna.value == '') {
        hayError = true;
    } else {}

    if (inputConfirmarContrasenna.value == '') {
        hayError = true;
    }

    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Cambio de contraseña fallido',
            'text': 'Datos incompletos'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Cambio de contraseña éxitoso',
            'text': 'La contraseña se ha cambiado'
        }).then(() => {
            //Redireccionar a la segunda página de registro
            window.location.href = 'login.html';
        });
    }
}

botonCambiar.addEventListener('click', validar);