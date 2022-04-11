const botonRegistrar = document.getElementById('btn-registrar');
const inputCantidad = document.getElementById('txtcantidadFan');


const validar = () => {
    let hayError = false;

    if (inputCantidad.value == '') {
        hayError = true;
    }

    //Validacion final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Libro no registrado',
            'text': 'Favor complete todos los campos'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Libro  registrado',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al listado de autores
            window.location.href = 'catalogolibrofan-administrador.html'
        });

    };


}




botonRegistrar.addEventListener('click', validar);