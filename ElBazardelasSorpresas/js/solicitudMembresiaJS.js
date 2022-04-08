// Iniciar validacion, primero creando las constantes extrayendo la informacion desde el formulario en el HTML
const botonRegistrar = document.getElementById('btn-registrar');
const inputNombre = document.getElementById('txt-nombre');
const inputApellido = document.getElementById('txt-apellido');
const listaGenero = document.getElementById('slt-genero');
const inputEdad = document.getElementById('txt-edad');
const inputCorreo = document.getElementById('txt-email');
const inputTelefono = document.getElementById('txt-telefono');
const inputDomicilio = document.getElementById('txt-direccion');
const listaProvincia = document.getElementById('slt-provincia');
const inputCanton = document.getElementById('txt-canton');
const inputDistrito = document.getElementById('txt-distrito');

// A crear la funcion de flecha "imprimir" para saber si la coneccion con el HTML funciona bien
const imprimir = () => {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let correo = inputCorreo.value;
    let provincia = listaProvincia.value;
    let canton = inputCanton.value;
    let distrito = inputDistrito.value;
    let genero = listaGenero.value;
    let telefono = inputTelefono.value;
    let domicilio = inputDomicilio.value;
    let edad = inputEdad.value;

    console.log('El nombre de usuario es:', nombre);
    console.log('El apellido del usuario es:', apellido);
    console.log('El correo del usuario es:', correo);
    console.log('La provincia es:', provincia);
    console.log('El cantón es:', canton);
    console.log('El distrito es:', distrito);
    console.log('El genero del usuario es:', genero);
    console.log('El teléfono es:', telefono);
    console.log('El domicilio es:', domicilio);
    console.log('La edad es:', edad);
}

imprimir();

botonRegistrar.addEventListener('click', imprimir);