const botonRegistrar = document.getElementById('btn-registrar');
const botonCancelar = document.getElementById('btn-cancelar');
const inputIDsocio = document.getElementById('txt-idSocio');
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

    if (inputIDsocio.value == '') {
        hayError = true;
    } else {

    }

    if (inputImagenSocio.value == '') {
        hayError = true;
    } else {

    }

    if (inputNombreSocio.value == '') {
        hayError = true;
    } else {

    }

    if (inputFechaIngreso.value == '') {
        hayError = true;
    } else {

    }

    if (inputTelefono.value == '') {
        hayError = true;
    } else {

    }

    if (inputCorreo.value == '') {
        hayError = true;
    } else {

    }

    if (listaProvincia.value == '') {
        hayError = true;
    } else {

    }

    if (listaCanton.value == '') {
        hayError = true;
    } else {

    }

    if (listaDistrito.value == '') {
        hayError = true;
    } else {

    }

    if (sennasSocio.value == '') {
        hayError = true;
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
            window.location.href = 'sociosComercialesAdmin.html'
        });

    };


}

botonRegistrar.addEventListener('click', validar);