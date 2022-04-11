const botonRegistrar = document.getElementById('btn-registrar');
const botonCancelar = document.getElementById('btn-cancelar');
const idAutor = document.getElementById('txt-idautor');
const fotoAutor = document.getElementById('txt-imagenAutor');
const nombreAutor = document.getElementById('txt-nombreautor');
const listaPais = document.getElementById('slt-paises');
const fechaNacimiento = document.getElementById('txt-fechanaci');
const fechaDefuncion = document.getElementById('txt-fechadefu');
const listaGenero = document.getElementById('slt-genero');
const librosPublicados = document.getElementById('ctx-libropubli');
const premiosGanados = document.getElementById('ctx-premiosganados');
const fechaPremio = document.getElementById('fechaPremio');
const resennaAutor = document.getElementById('ctx-resennautor');
const libroEscrito = document.getElementById('ctx-libroescrito');

/*const imprimir = () => {
    let id = idAutor.value;
    let foto = fotoAutor.value;
    let nombre = nombreAutor.value;
    let Pais = listaPais.value;

    console.log('El ID de autor es:', id);
    console.log('la foto de autor es:', foto);
    console.log('El nombre del autor es:', nombre);
    console.log('El pais  es:', Pais);
};

imprimir();
*/
//procedimiento seleccionar Premio Nobel
//const fechaPremio = document.getElementById('fechaPremio');

//evento No
document.getElementById('noGanaPremio').addEventListener('click', function(e) {
    fechaPremio.disabled = true;
});

//evento sí
let habilita = 0;
document.getElementById('siGanaPremio').addEventListener('click', function(e) {
    fechaPremio.disabled = false;
    habilita = 1;
});

//Construcción de función validar.
const validar = () => {
    let hayError = false;

    if (idAutor.value == '') {
        hayError = true;
    } else {

    }

    if (fotoAutor.value == '') {
        hayError = true;
    } else {

    }

    if (nombreAutor.value == '') {
        hayError = true;
    } else {

    }

    if (listaPais.value == '') {
        hayError = true;
    } else {

    }

    if (fechaNacimiento.value == '') {
        hayError = true;
    } else {

    }

    if (fechaDefuncion.value == '') {
        hayError = true;
    } else {

    }

    if (listaGenero.value == '') {
        hayError = true;
    } else {

    }

    if (librosPublicados.value == '') {
        hayError = true;
    } else {

    }

    if (premiosGanados.value == '') {
        hayError = true;
    } else {

    }

    if (fechaPremio.value == '' && habilita == 1) {
        hayError = true;
    } else {

    }

    if (resennaAutor.value == '') {
        hayError = true;
    } else {

    }

    if (libroEscrito.value == '') {
        hayError = true;
    }

    //Validacion final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Autor no registrado',
            'text': 'Favor complete todos los campos'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Autor  registrado',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al listado de autores
            window.location.href = 'catalogoAutorAdmin.html'
        });

    };


}


botonRegistrar.addEventListener('click', validar);