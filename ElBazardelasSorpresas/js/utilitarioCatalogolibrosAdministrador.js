const botonRegistrar = document.getElementById('btn-registrar');
const botonModificar = document.getElementById('btn-modificar');
const botonCancelar = document.getElementById('btn-cancelar');
const inputIsbn = document.getElementById('txt-isbn');
const inputNombreLibro = document.getElementById('txt-nombrelibro');
const inputAutor = document.getElementById('txt-autor');
const inputFechaPublicacion = document.getElementById('txt-fechapubli');
const listaGenero = document.getElementById('slt-genero');
const inputEditorial = document.getElementById('txt-editorial');
const inputPremios = document.getElementById('txt-premios');
const inputResenna = document.getElementById('txt-resenna');
const inputPsubTotal = document.getElementById('txt-psubtotal');
const inputUtilidad = document.getElementById('txt-utilidad');
const listaImpuesto = document.getElementById('slt-impuesto');
const inputDescuento = document.getElementById('txt-descuento');
const inputPfinal = document.getElementById('txt-pfinal');
const inputInvInicial = document.getElementById('txt-invinicial');


const imprimir = () => {
    let Isbn = inputIsbn.value;
    let nombrelibro = inputNombreLibro.value;
    let Autor = inputAutor.value;
    let publicacion = inputFechaPublicacion.value;

    console.log('El ISBN es:', Isbn);
    console.log('El nombre del libro es:', nombrelibro);
    console.log('El nombre del autor es:', Autor);
    console.log('La fecha de publicación es:', publicacion);
};

//Creación de función para validación

const validar = () => {
    let hayError = false;

    if (inputIsbn.value == '') {
        hayError = true;
    } else {

    }

    if (inputNombreLibro.value == '') {
        hayError = true;
    } else {

    }

    if (inputAutor.value == '') {
        hayError = true;
    } else {

    }

    if (inputFechaPublicacion.value == '') {
        hayError = true;
    } else {

    }

    if (listaGenero.value == '') {
        hayError = true;
    } else {

    }

    if (inputEditorial.value == '') {
        hayError = true;
    } else {

    }

    if (inputPremios.value == '') {
        hayError = true;
    } else {

    }

    if (inputResenna.value == '') {
        hayError = true;
    } else {

    }

    if (inputPsubTotal.value == '') {
        hayError = true;
    } else {

    }

    if (inputUtilidad.value == '') {
        hayError = true;
    } else {

    }

    if (listaImpuesto.value == '') {
        hayError = true;
    } else {

    }

    if (inputDescuento.value == '') {
        hayError = true;
    } else {

    }

    if (inputPfinal.value == '') {
        hayError = true;
    } else {

    }



    if (inputInvInicial.value == '') {
        hayError = true;

    }

    //Validación final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Item no registrado',
            'text': 'Favor revisar todos los campos'
        });
    } else {
        Swal.fire({
            'icon': 'Exito',
            'title': 'Item registrado',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al listado de libros
            window.location.href = 'catalogoLibrosAdministrador.html'
        });
    };

}




//imprimir();

botonRegistrar.addEventListener('click', validar);