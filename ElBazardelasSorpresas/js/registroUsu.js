//Constantes para extraer datos del formulario HTML
const botonContinuar = document.getElementById('btn-continuar');
const inputNombre = document.getElementById('txt-nombre');
const inputApellido = document.getElementById('txt-apellido');
const inputSegundoNombre = document.getElementById('txt-segundoNombre');
const inputTelefono = document.getElementById('txt-telefono');
const inputCorreo = document.getElementById('txt-correo');
const inputContrasenna = document.getElementById('txt-contrasenna');
const inputConfirmaContrasenna = document.getElementById('txt-confiContrasenna');
const inputIdentificacion = document.getElementById('txt-identificacion');
const inputDireccion = document.getElementById('txt-direccion');
const selectProvincia = document.getElementById('slt-provincias');
const selectCanton = document.getElementById('slt-cantones');
const selectDistrito = document.getElementById('slt-distritos');
const selectTipoId = document.getElementById('slt-identificacion')
const inputFoto = document.getElementById('txt-foto');
const inputSegundoApellido = document.getElementById('txt-segundoApellido');
const selectGenero = document.getElementById('slt-genero');
const inputNumTarjeta = document.getElementById('txt-numTarjeta');
const selectTipoTarjeta = document.getElementById('slt-tipoTarjeta');
const inputFechaExp = document.getElementById('txt-fechaExp');
const inputTitularTarjeta = document.getElementById('txt-nombreTarjetaHabiente');
const inputCodigoVerifica = document.getElementById('txt-codigoVerifica');


const imprimir = () => {
    let nombre = inputNombre.value;
    let segundoNombre = inputSegundoNombre.value;
    let apellido = inputApellido.value;
    let telefono = inputTelefono.value;
    let correo = inputCorreo.value;
    let contrasenna = inputContrasenna.value;
    let confirmaContrasenna = inputConfirmaContrasenna.value;
    let identificacion = inputIdentificacion.value;

    console.log('El nombre es:', nombre);
    console.log('El segundo nombre es:', segundoNombre);
    console.log('El apellido es:', apellido);
    console.log('El telefono es:', telefono);
    console.log('El correo es:', correo);
    console.log('La contrasenna es:', contrasenna);
    console.log('La confirmacion de la contrasenna es:', confirmaContrasenna);
    console.log('La identificacion es:', identificacion);

};

const validar = () => {
    let hayError = false;

    if (inputNombre.value == '') {
        hayError = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');

    }

    if (inputSegundoNombre.value == '') {
        hayError = true;
        inputSegundoNombre.classList.add('input-error');

    } else {
        inputSegundoNombre.classList.remove('input-error');
    }

    if (inputApellido.value == '') {
        hayError = true;
        inputApellido.classList.add('input-error');

    } else {
        inputApellido.classList.remove('input-error');
    }

    if (inputTelefono.value == '') {
        hayError = true;
        inputTelefono.classList.add('input-error');

    } else {
        inputTelefono.classList.remove('input-error');
    }

    if (inputCorreo.value == '') {
        hayError = true;
        inputCorreo.classList.add('input-error');

    } else {
        inputCorreo.classList.remove('input-error');
    }

    if (inputContrasenna.value == '') {
        hayError = true;
        inputContrasenna.classList.add('input-error');

    } else {
        inputContrasenna.classList.remove('input-error');
    }

    if (inputConfirmaContrasenna.value == '') {
        hayError = true;
        inputConfirmaContrasenna.classList.add('input-error');

    } else {
        inputConfirmaContrasenna.classList.remove('input-error');
    }

    if (inputIdentificacion.value == '') {
        hayError = true;
        inputIdentificacion.classList.add('input-error');

    } else {
        inputIdentificacion.classList.remove('input-error');
    }

    if (inputDireccion.value == '') {
        hayError = true;
        inputDireccion.classList.add('input-error');

    } else {
        inputDireccion.classList.remove('input-error');
    }

    if (selectProvincia.value == '') {
        hayError = true;
        selectProvincia.classList.add('input-error');

    } else {
        selectProvincia.classList.remove('input-error');
    }

    if (selectCanton.value == '') {
        hayError = true;
        selectCanton.classList.add('input-error');

    } else {
        selectCanton.classList.remove('input-error');
    }

    if (selectDistrito.value == '') {
        hayError = true;
        selectDistrito.classList.add('input-error');

    } else {
        selectDistrito.classList.remove('input-error');
    }

    if (inputSegundoApellido.value == '') {
        hayError = true;
        inputSegundoApellido.classList.add('input-error');
    } else {
        inputSegundoApellido.classList.remove('input-error');
    }

    if (selectGenero.value == '') {
        hayError = true;
        selectGenero.classList.add('input-error');
    } else {
        selectGenero.classList.remove('input-error');
    }

    if (selectTipoId.value == '') {
        hayError = true;
        selectTipoId.classList.add('input-error');
    } else {
        selectTipoId.classList.remove('input-error');
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Registro fallido',
            'text': 'Datos incompletos para continuar'
        });
    } else {
        /*Swal.fire({
            'icon': 'success',
            'title': 'Registro éxitoso',
            'text': 'Bienvenido al Bazar de las sorpresas'
        }).then(() => {
            //Redireccionar a la segunda página de registro
            window.location.href = 'landingPageBazarRegistrado.html';
        });*/

        registrarUsuario();
    }
};

const registrarUsuario = () => {
    let data = {
        "primerNombre": inputNombre.value,
        "segundoNombre": inputSegundoNombre.value,
        "primerApellido": inputApellido.value,
        "segundoApellido": inputSegundoApellido.value,
        "numTelefono": inputTelefono.value,
        "genero": selectGenero.value,
        "tipoIdentificacion": selectTipoId.value,
        "identificacion": inputIdentificacion.value,
        "correoElectronico": inputCorreo.value,
        "contrasenna": inputContrasenna.value,
        "confirmacionContrasenna": inputConfirmaContrasenna.value,
        "direccion": inputDireccion.value,
        "provincia": selectProvincia.value,
        "canton": selectCanton.value,
        "distrito": selectDistrito.value,
        "fotoPerfil": inputFoto.value,
        "numTarjeta": inputNumTarjeta.value,
        "tipoTarjeta": selectTipoTarjeta.value,
        "fechaExp": inputFechaExp.value,
        "titularTarjeta": inputTitularTarjeta.value,
        "codigoVerificacion": inputCodigoVerifica.value,

    }
    registrarDatos('registrarUsuario', data, 'reporteUsuariosAdministrador.html');

}

botonContinuar.addEventListener('click', () => {
    validar();
});