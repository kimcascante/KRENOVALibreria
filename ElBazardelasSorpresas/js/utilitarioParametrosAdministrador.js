const inputImpuesto = document.getElementById('txt-idimpuesto');
const inputNombre = document.getElementById('txt-nombreImpuesto');
const inputPorcentaje = document.getElementById('txt-porcentajeImpuesto');
const inputEstado = document.getElementById('slt-genero');
const botonGuardar = document.getElementById('btn-registrar');




const imprimir = () => {
    let impuesto = inputImpuesto.value;
    let nombre = inputNombre.value;
    let porcentaje = inputPorcentaje.value;
    let estado = inputEstado.value;


    console.log('', impuesto);
    console.log('', nombre);
    console.log('', porcentaje);
    console.log('', estado);
};
imprimir();

botonGuardar.addEventListener('click', imprimir);

const validar = () => {
    let hayError = false;

    if (inputImpuesto.value == '') {
        hayError = true;
        inputImpuesto.classList.add('input-error')
    } else {
        inputImpuesto.classList.remove('input-error');
    }

    if (inputNombre.value == '') {
        hayError = true;
        inputNombre.classList.add('input-error')
    } else {
        inputNombre.classList.remove('input-error');
    }

    if (inputPorcentaje.value == '') {
        hayError = true;
        inputPorcentaje.classList.add('input-error')
    } else {
        inputPorcentaje.classList.remove('input-error');
    }

    if (inputEstado.value == '') {
        hayError = true;
        inputEstado.classList.add('input-error')
    } else {
        inputEstado.classList.remove('input-error');
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
botonGuardar.addEventListener('click', validar);