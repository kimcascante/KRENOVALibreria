// Iniciar validacion, primero creando las constantes extrayendo la informacion desde el formulario en el HTML
const botonRegistrar = document.getElementById('btn-registrar');
const inputNombre = document.getElementById('txt-nombre');
const inputApellido = document.getElementById('txt-apellido');
const listaGenero = document.getElementById('slt-genero');
const inputEdad = document.getElementById('txt-edad');
const inputCorreo = document.getElementById('txt-email');
const inputTelefono = document.getElementById('txt-telefono');
const inputDomicilio = document.getElementById('txt-direccion');
const listaProvincia = document.getElementById('slt-provincias');
const inputCanton = document.getElementById('slt-cantones');
const inputDistrito = document.getElementById('slt-distritos');

// A crear la funcion de flecha "imprimir" para saber si la coneccion con el HTML funciona bien
const imprimir = () => {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let genero = listaGenero.value;
    let edad = inputEdad.value;
    let correo = inputCorreo.value;
    let telefono = inputTelefono.value;
    let domicilio = inputDomicilio.value;
    let provincias = listaProvincias.value;
    let canton = inputCanton.value;
    let distrito = inputDistrito.value;




    console.log('El nombre de usuario es:', nombre);
    console.log('El apellido del usuario es:', apellido);
    console.log('El correo del usuario es:', correo);
    console.log('El genero del usuario es:', genero);
    console.log('La edad es:', edad);
    console.log('El teléfono es:', telefono);
    console.log('El domicilio es:', domicilio);
    console.log('La provincia es:', provincias);
    console.log('El cantón es:', canton);
    console.log('El distrito es:', distrito);
};

//Crear la funcion de validacion "validar"
const validar = () => {
    let hayError = false;

    if (inputNombre.value == '') {
        hayError = true;
    } else {

    }

    if (inputApellido.value == '') {
        hayError = true;
    } else {

    }

    if (inputCorreo.value == '') {
        hayError = true;
    } else {

    }

    if (listaGenero.value == '') {
        hayError = true;
    } else {

    }

    if (inputEdad.value == '') {
        hayError = true;
    } else {

    }

    if (inputCorreo.value == '') {
        hayError = true;
    } else {

    }

    if (inputTelefono.value == '') {
        hayError = true;
    } else {

    }

    if (inputDomicilio.value == '') {
        hayError = true;
    } else {

    }

    if (listaProvincias.value == '') {
        hayError = true;
    } else {

    }

    if (inputCanton.value == '') {
        hayError = true;
    } else {

    }

    if (inputDistrito.value == '') {
        hayError = true;
    }



    //Validacion final
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Usuario no registrado',
            'text': 'Favor revise los campos resaltados'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario  registrado',
            'text': 'Registro completado!'
        }).then(() => {
            //Redirecciona al landing page del Bazar
            window.location.href = 'landingPageBazar.html'
        });

    };


}





//imprimir();

botonRegistrar.addEventListener('click', validar);