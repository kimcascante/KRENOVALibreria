const botonRegistrar = document.getElementById('btn-registrar ');
const botonRegistrar2 = document.getElementById('btn-registrar2 ');
const botonRegistrar3 = document.getElementById('btn-registrar3');
const listaZona = document.getElementById('slt-zona');
const listaZona2 = document.getElementById('slt-zona2');
const listaZona3 = document.getElementById('slt-zona3');
const inputTarifa = document.getElementById('txttarifa ');
const inputTarifa2 = document.getElementById('txttarifa2 ');
const inputTarifa3 = document.getElementById('txttarifa3 ');

const imprimir = () => {
    let zona = listaZona.value;
    let tarifa = inputTarifa.value;


    console.log('El nombre del autor es:', zona);
    console.log('El pais  es:', tarifa);
};
imprimir();

botonRegistrar3.addEventListener('click', imprimir);


//inicia validacion

const validar = () => {
    let hayError = false;

    if (inputTarifa.value == '') {
        hayError = true;
        inputTarifa.classList.add('input-error')
    } else {
        inputTarifa.classList.remove('input-error');
    }

    if (inputTarifa2.value == '') {
        hayError = true;
        inputTarifa2.classList.add('input-error')
    } else {
        inputTarifa2.classList.remove('input-error');
    }

    if (inputTarifa3.value == '') {
        hayError = true;
        inputTarifa3.classList.add('input-error')
    } else {
        inputTarifa3.classList.remove('input-error');
    }

    if (listaZona.value == '' || listaZona.value == "-- Seleccione una opción --") {
        hayError = true;
        listaZona.classList.add('input-error');
    } else {
        listaZona.classList.remove('input-error');
    }

    if (listaZona2.value == '' || listaZona2.value == "-- Seleccione una opción --") {
        hayError = true;
        listaZona2.classList.add('input-error');
    } else {
        listaZona2.classList.remove('input-error');
    }

    if (listaZona3.value == '' || listaZona3.value == "-- Seleccione una opción --") {
        hayError = true;
        listaZona3.classList.add('input-error');
    } else {
        listaZona3.classList.remove('input-error');
    }

    //validacion final

    if (hayError == true) {

        Swal.fire({
            icon: 'error',
            title: '',
            text: 'Por favor llene todos los campos',
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Datos Guardados',
            text: '',
        }).then(() => {
            //redirecciona 

        });
    }
};

//console clear
botonRegistrar3.addEventListener('click', validar);