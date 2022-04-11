const tramitarCompra = document.getElementById('boton_1');
const inputTarjeta = document.getElementById('txt-tarjeta')
const inputNombre = document.getElementById('txt-nombre')
const inputExpiracion = document.getElementById('txt-expiracion')
const inputCVV = document.getElementById('txt-cvv')
const inputFactura = document.getElementById('txt-factura')
const inputDestino = document.getElementById('txt-destino')
const inputMetodo = document.getElementById('txt-metodo')


const validar = () => {
    let hayError = false;

    if (inputTarjeta.value == '') {
        hayError = true;
        //inputTarjeta.classList.add('input-error')
    } else {
        //inputTarjeta.classList.remove('input-error');
    }

    if (inputNombre.value == '') {
        hayError = true;
        //inputNombre.classList.add('input-error');
    } else {
        //inputNombre.classList.remove('input-error');
    }

    if (inputExpiracion.value == '') {
        hayError = true;
        //inputExpiracion.classList.add('input-error');
    } else {
        //inputExpiracion.classList.remove('input-error');
    }

    if (inputCVV.value == '') {
        hayError = true;
        //inputCVV.classList.add('input-error');
    } else {
        //inputCVV.classList.remove('input-error');

    }

    if (inputFactura.value == '') {
        hayError = true;
        //inputFactura.classList.add('input-error');
    } else {
        //inputFactura.classList.remove('input-error');

    }
    if (inputDestino.value == '') {
        hayError = true;
        //inputDestino.classList.add('input-error');
    } else {
        //inputDestino.classList.remove('input-error');

    }

    if (inputMetodo.value == '') {
        hayError = true;
        //inputMetodo.classList.add('input-error');
    }


    //validacion final

    if (hayError == true) {

        Swal.fire({
            icon: 'error',
            title: 'Su compra no pudo ser completada',
            text: 'Revise los campos faltantes',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Su compra ha sido realizada con exito',
            text: 'ID de pedido: KRD0001 ',
        }).then(() => {
            //redirecciona a la paginade de usuarios listar.html
            window.location.href = 'reporteCompras.html';
        });
    }
};

//console clear
tramitarCompra.addEventListener('click', validar);