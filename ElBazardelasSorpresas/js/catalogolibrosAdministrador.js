const botonBuscar = document.getElementById('btn-buscarlibros');
const botonIngresar = document.getElementById('btn-ingresarlibro');
const inputIsbn = document.getElementById('txtlibroIsbn');
const inputnombreLibro = document.getElementById('txtnombreLibro ');


/*const inputModificar = document.getElementById('txtlibroModificar');
const inputEliminar = document.getElementById('txtlibroEliminar');*/
let libro = []

const agregarlibro = () => {
    let libroIsbn = inputIsbn.value;
    let nombreLibro = inputnombreLibro.value;
    let inventarioAct = inputinventarioActual.value;
    /*libro.push(libroIsbn);
    libro.push(nombreLibro);
    libro.push(inventarioAct);*/
    console.log(libroIsbn);
    console.log(nombreLibro);
    console.log(inventarioAct);


};

const validar = () => {
    let hayError = false;

    if (inputIsbn.value == '') {
        hayError = true;
        inputIsbn.classList.add('input-error');
    } else {
        inputIsbn.classList.remove('input-error');
    }

    if (nombreLibro.value == '') {
        hayError = true;
        nombreLibro.classList.add('input-error');
    } else {
        nombreLibro.classList.remove('input-error');
    }

    if (inventarioAct.value == '') {
        hayError = true;
        inventarioAct.classList.add('input-error');
    } else {
        inventarioAct.classList.remove('input-error');
    }

    /*if (inputNacimiento.value == '') {
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
    }*/
    //Validación final

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos incompletos',
            'text': 'Por favor revise los campos resaltados'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Registro incluído satisfactoriamente',
            'text': 'Revise el listado de libros'
        }).then(() => {
            //Redireccionar a la página de usuarios-listar.html
            /* window.location.href = 'usuarios-listar.html';*/
        });
    }

};
botonRegistrar.addEventListener('click', validar);
/*/botonIngresar.addEventListener('click',window.location.href = 'utilitario catalogo-administrador.html');*/