const botonRegistrar = document.getElementById('btn-registrar');
const botonModificar = document.getElementById('btn-modificar');
const botonCancelar = document.getElementById('btn-cancelar');
const inputIsbn = document.getElementById('txt-isbn');
const inputNombreLibro = document.getElementById('txt-nombrelibro');
const inputImagenLibro = document.getElementById('txt-imagenlibro');
const inputAutor = document.getElementById('txt-autor');
const inputFechaPublicacion = document.getElementById('txt-fechapubli');
const listaGenero = document.getElementById('slt-genero');
const inputEditorial = document.getElementById('txt-editorial');
const inputPremios = document.getElementById('txt-premios');
const inputResenna = document.getElementById('txt-resenna');
const inputDescuento = document.getElementById('txt-descuento');
const inputPfinal = document.getElementById('txt-pfinal');
const inputInvInicial = document.getElementById('txt-invinicial');


/*const imprimir = () => {
    let Isbn = inputIsbn.value;
    let nombrelibro = inputNombreLibro.value;
    let Autor = inputAutor.value;
    let publicacion = inputFechaPublicacion.value;

    console.log('El ISBN es:', Isbn);
    console.log('El nombre del libro es:', nombrelibro);
    console.log('El nombre del autor es:', Autor);
    console.log('La fecha de publicación es:', publicacion);
};*/

//Creación de función para validación

const validar = () => {
    let hayError = false;

    if (inputIsbn.value == '') {
        hayError = true;
        inputIsbn.classList.add('input-error');
    } else {
        inputIsbn.classList.remove('input-error');

    }

    if (inputNombreLibro.value == '') {
        hayError = true;
        inputNombreLibro.classList.add('input-error');
    } else {
        inputNombreLibro.classList.remove('input-error');

    }

    if (inputImagenLibro.value == '') {
        hayError = true;
        inputImagenLibro.classList.add('input-error');
    } else {
        inputImagenLibro.classList.remove('input-error');
    }

    if (inputAutor.value == '') {
        hayError = true;
        inputAutor.classList.add('input-error');
    } else {
        inputAutor.classList.remove('input-error');

    }

    if (inputFechaPublicacion.value == '') {
        hayError = true;
        inputFechaPublicacion.classList.add('input-error');
    } else {
        inputFechaPublicacion.classList.remove('input-error');

    }

    if (listaGenero.value == '') {
        hayError = true;
        listaGenero.classList.add('input-error');
    } else {
        listaGenero.classList.remove('input-error');

    }

    if (inputEditorial.value == '') {
        hayError = true;
        inputEditorial.classList.add('input-error');
    } else {
        inputEditorial.classList.remove('input-error');

    }

    if (inputPremios.value == '') {
        hayError = true;
        inputPremios.classList.add('input-error');
    } else {
        inputPremios.classList.remove('input-error');

    }

    if (inputResenna.value == '') {
        hayError = true;
        inputResenna.classList.add('input-error');
    } else {
        inputResenna.classList.remove('input-error');

    }

    if (inputDescuento.value == '') {
        hayError = true;
        inputDescuento.classList.add('input-error');
    } else {
        inputDescuento.classList.remove('input-error');

    }

    if (inputPfinal.value == '') {
        hayError = true;
        inputPfinal.classList.add('input-error');
    } else {
        inputPfinal.classList.remove('input-error');

    }

    if (inputInvInicial.value == '') {
        hayError = true;
        inputInvInicial.classList.add('input-error');
    } else {
        inputInvInicial.classList.remove('input-error');

    }
    //Validación final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Item no registrado',
            'text': 'Favor revisar los campos resaltados'
        });
    } else {
        /*Swal.fire({
            'icon': 'Exito',
            'title': 'Item registrado',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al listado de libros
            window.location.href = 'catalogoLibrosAdministrador.html'
        });*/
        registrarLibro();
    }

};

const registrarLibro = () => {
    let data = {
        "isbn": inputIsbn.value,
        "nombreLibro": inputNombreLibro.value,
        "imagenLibro": inputImagenLibro.value,
        "autor": inputAutor.value,
        "fechaPublicacion": inputFechaPublicacion.value,
        "generoLiterario": listaGenero.value,
        "editorial": inputEditorial.value,
        "premiosGanados": inputPremios.value,
        "resenna": inputResenna.value,
        "descuento": inputDescuento.value,
        "precio": inputPfinal.value,
        "inventarioInicial": inputInvInicial.value

    };
    registrarDatos('registrar-libros', data, 'catalogolibrosAdministrador.html');
};

botonRegistrar.addEventListener('click', () => {
    validar();
});