const botonRegistrar = document.getElementById('btn-registrar');
const botonCancelar = document.getElementById('btn-cancelar');
const inputIDsocio = document.getElementById('txt-idSocio');
const inputImagenSocio = document.getElementById('txt-imagenSocio');
const inputNombreSocio = document.getElementById('txt-nombreSocio');
const inputFechaIngreso = document.getElementById('txt-fechaIngreso');
const inputTelefono = document.getElementById('txt-telefonoSocio');
const inputCorreo = document.getElementById('txt-correoSocio');
const listaProvincia = document.getElementById('slt-provincias');
const listaCanton = document.getElementById('slt-cantones');
const listaDistrito = document.getElementById('slt-distritos');
const sennasSocio = document.getElementById('txt-sennaSocio');
const inputPuntoRetiro = document.getElementById('nopuntoRetiro')

//Función imprimir
const imprimir = () => {
    let id = inputIDsocio.value;
    let imagen = inputImagenSocio.value;
    let retiro = inputPuntoRetiro.value;

    console.log('El ID del socio es:', id);
    console.log('La imagen del socio es:', imagen);
    console.log('es o no punto de retiro:', retiro);
};


//evento No
document.getElementById('nopuntoRetiro').addEventListener('click', function(e) {
    fechaPremio.disabled = true;
});

//evento sí
let habilita = 0;
document.getElementById('sipuntoRetiro').addEventListener('click', function(e) {
            fechaPremio.disabled = false;
            habilita = 1;

            imprimir();