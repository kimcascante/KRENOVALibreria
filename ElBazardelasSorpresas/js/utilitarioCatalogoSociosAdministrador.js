const botonRegistrar = document.getElementById('btn-registrar');
const botonCancelar = document.getElementById('btn-cancelar');
const inputImagenSocio = document.getElementById('txt-imagenSocio');
const inputNombreSocio = document.getElementById('txt-nombreSocio');
const inputFechaIngreso = document.getElementById('txt-fechaIngreso');
const inputTelefono = document.getElementById('txt-telefonoSocio');
const inputCorreo = document.getElementById('txt-correoSocio');
const listaProvincia = document.getElementById('slt-provincias');
const listaCanton = document.getElementById('slt-cantones');
const listaDistrito = document.getElementById('slt-distritos');
const sennasSocio = document.getElementById('txt-sennaSocio');


/*Función imprimir
const imprimir = () => {
    let id = inputIDsocio.value;
    let imagen = inputImagenSocio.value;
    let nombreSocio = inputNombreSocio.value;
    console.log('El ID del socio es:', id);
    console.log('La imagen del socio es:', imagen);
    console.log('El nombre de socio es:', nombreSocio);
};
imprimir();
*/

//Creación de funcion de validación
const validar = () => {
    let hayError = false;

    if (inputImagenSocio.value == '') {
        hayError = true;
        inputImagenSocio.classList.add('input-error');
    } else {
        inputImagenSocio.classList.remove('input-error');

    }

    if (inputNombreSocio.value == '') {
        hayError = true;
        inputNombreSocio.classList.add('input-error');
    } else {
        inputNombreSocio.classList.remove('input-error');

    }

    if (inputFechaIngreso.value == '') {
        hayError = true;
        inputFechaIngreso.classList.add('input-error');
    } else {
        inputFechaIngreso.classList.remove('input-error');

    }

    if (inputTelefono.value == '') {
        hayError = true;
        inputTelefono.classList.add('input-error');
    } else {
        inputTelefono.classList.remove('input-error');

    }

    if (inputCorreo.value == '') {
        hayError = true;
        inputCorreo.classList.add('input-error');
    } else {
        inputCorreo.classList.remove('input-error');

    }

    if (listaProvincia.value == '') {
        hayError = true;
        listaProvincia.classList.add('input-error');
    } else {
        listaProvincia.classList.remove('input-error');

    }

    if (listaCanton.value == '') {
        hayError = true;
        listaCanton.classList.add('input-error');
    } else {
        listaCanton.classList.remove('input-error');

    }

    if (listaDistrito.value == '') {
        hayError = true;
        listaDistrito.classList.add('input-error');
    } else {
        listaDistrito.classList.remove('input-error');

    }

    if (sennasSocio.value == '') {
        hayError = true;
        sennasSocio.classList.add('input-error');
    }

    //Validacion final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Socio comercial no registrado',
            'text': 'Favor complete todos los campos'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Socio comercial registrado',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al listado de socios comerciales
            window.location.href = 'utilitarioCatalogoSociosAdministrador.html'
        });

    };


}

botonRegistrar.addEventListener('click', validar);