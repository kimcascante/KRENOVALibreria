// Declarar constantes para extraer datos del HTML
const botonRegistrar = document.getElementById('btn-registrar');
const botonCancelar = document.getElementById('btn-cancelar');
const inputIdsocio = document.getElementById('txt-idSocio');
const inputNombreSocio = document.getElementById('txt-nombreSocio');
const inputIdpunto = document.getElementById('txt-idPunto');
const inputNombrePunto = document.getElementById('txt-nombrePunto');
const inputTelefono = document.getElementById('txt-telefonoPunto');
const listaProvincia = document.getElementById('slt-provincias');
const listaCanton = document.getElementById('slt-cantones');
const listaDistrito = document.getElementById('slt-distritos');
const inputOtrasSennas = document.getElementById('txt-sennaSocio');

/*Imprimir para validar enlace entre HTML y JS
const imprimir = () => {
    let id = inputIdsocio.value;
    let nombre = inputNombreSocio.value;
    let idPunto = inputIdpunto.value;
    console.log('El ID del socio es:', id);
    console.log('El nombre del socio es:', nombre);
    console.log('El id del punto de retiro es:', idPunto);
};
imprimir();
*/

//Función de validación
const validar = () => {
    let hayError = false;

    if (inputIdsocio.value == '') {
        hayError = true;
    } else {

    }

    if (inputNombreSocio.value == '') {
        hayError = true;
    } else {

    }

    if (inputIdpunto.value == '') {
        hayError = true;
    } else {

    }

    if (inputNombrePunto.value == '') {
        hayError = true;
    } else {

    }

    if (inputTelefono.value == '') {
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

    if (inputOtrasSennas.value == '') {
        hayError = true;
    }

    //Validacion final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Punto de retiro no registrado',
            'text': 'Favor complete todos los campos'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Punto de retiro registrado',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al listado de puntos de retiro
            window.location.href = 'puntosRetiroAdmin.html'
        });

    };





}
botonRegistrar.addEventListener('click', validar);