const botonRegistrar = document.getElementById('btn-registrar');
const botonModificar = document.getElementById('btn-modificar');
const botonCancelar = document.getElementById('btn-cancelar');
const inputIsbn = document.getElementById('txt-isbn');
const inputNombreLibro = document.getElementById('txt-nombrelibro');
const inputAutor = document.getElementById('txt-autor');
const inputFechaPublicacion = document.getElementById('txt-fechapubli');
const inputEditorial = document.getElementById('txt-editorial');
const inputConfirmacion = document.getElementById('txt-confirmacion');

/*const imprimir = () => {
    let tipoUsuario = listaUsuarios.value;
    let correo = inputCorreo.value;
    let nombre = inputNombre.value;
    let nacimiento = inputNacimiento.value;
    console.log('El tipo de usuario es: ', tipoUsuario);
    console.log('El correo es: ', correo);
    console.log('El nombre es: ', nombre);
    console.log('La fecha de nacimiento es: ', nacimiento)
};*/

const validar = () => {
    let hayError = false;

    if (inputIsbn.value == '') {
        hayError = true;
        inputIsbn.classList.add('input-error');
    } else {
        inputIsbn.classList.remove('input-error');
    }

    if (inputCorreo.value == '') {
        hayError = true;
        inputCorreo.classList.add('input-error');
    } else {
        inputCorreo.classList.remove('input-error');
    }

    if (inputNombre.value == '') {
        hayError = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }

    if (inputNacimiento.value == '') {
        hayError = true;
        inputNacimiento.classList.add('input-error');
    } else {
        inputNacimiento.classList.remove('input-error');
    }


    if (inputContrasenna.value !== inputConfirmacion.value || inputContrasenna.value == '') {
        hayError = true;
        inputContrasenna.classList.add('input-error');
        inputConfirmacion.classList.add('input-error');
    } else {
        inputContrasenna.classList.remove('input-error');
        inputConfirmacion.classList.remove('input-error');
    }
    //Validación final

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Usuario no registrado',
            'text': 'Por favor revise los campos resaltados'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario registrado',
            'text': 'Revise su correo electrónico para validar su cuenta'
        }).then(() => {
            //Redireccionar a la página de usuarios-listar.html
            window.location.href = 'usuarios-listar.html';
        });
    }

};

// console.clear();


botonRegistrar.addEventListener('click', validar);