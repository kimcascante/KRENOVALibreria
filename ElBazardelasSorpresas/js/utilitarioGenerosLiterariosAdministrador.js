const botonRegistrar = document.getElementById('btn-registrar');
const inputGeneroLiterario = document.getElementById('txt-idGenero');
const inputNombreGenero = document.getElementById('txt-nombreGenero');

//Función de validación
const validar = () => {
    let hayError = false;

    if (inputGeneroLiterario.value == '') {
        hayError = true;
    } else {

    }

    if (inputNombreGenero.value == '') {
        hayError = true;
    }

    //Validacion final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Género no registrado',
            'text': 'Favor complete todos los campos'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Género  registrado',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al listado de autores
            window.location.href = 'utilitarioGenerosLiterariosAdministrador.html'
        });

    };


}





botonRegistrar.addEventListener('click', validar);