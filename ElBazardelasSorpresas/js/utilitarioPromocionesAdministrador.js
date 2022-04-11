const botonRegistrar = document.getElementById('btn-registrar');
const botonLimpiar = document.getElementById('btn-cancelar');
const inputidPromocion = document.getElementById('txt-idPromocion');
const inputNombrePromocion = document.getElementById('txt-nombrePromocion');
const inputFechaInicia = document.getElementById('txt-fechainicia');
const inputFechaFinal = document.getElementById('txt-fechafinal');
const idCodigo = document.getElementById('idCodigo');
const nombreItem = document.getElementById('nombreItem');
const inputDescuento = document.getElementById('txt-descuento');

let habilita = 1;

document.getElementById('porArticulo').addEventListener('click', function(e) {
    idCodigo.disabled = false;
    nombreItem.disabled = false;

});

document.getElementById('porGenero').addEventListener('click', function(e) {
    idCodigo.disabled = false;
    nombreItem.disabled = false;

});

document.getElementById('porAutor').addEventListener('click', function(e) {
    idCodigo.disabled = false;
    nombreItem.disabled = false;

});

document.getElementById('General').addEventListener('click', function(e) {
    idCodigo.disabled = true;
    nombreItem.disabled = true;
    habilita = 0;
});


//Función de validación.
const validar = () => {
    let hayError = false;

    if (inputidPromocion.value == '') {
        hayError = true;
    } else if (inputNombrePromocion.value == '') {
        hayError = true;
    } else if (inputFechaInicia.value == '') {
        hayError = true;
    } else if (inputFechaFinal.value == '') {
        hayError = true;
    };

    if (habilita == 1) {
        habilita = 0;

        if (idCodigo.value == '') {
            hayError = true;
        } else if (nombreItem.value == '') {
            hayError = true;
        } else if (inputDescuento.value == '') {
            hayError = true;
        }
    } else if (habilita == 0) {
        if (inputDescuento.value == '') {
            hayError = true;
        }
    };
    //Validacion final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Promoción no registrada',
            'text': 'Favor complete todos los campos'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Promoción  registrada',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al listado de autores
            window.location.href = 'promociones.html'
        });

    };


}


botonRegistrar.addEventListener('click', validar);