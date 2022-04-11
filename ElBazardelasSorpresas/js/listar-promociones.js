const cuerpoTabla = document.querySelector('#tbl-listarPromociones tbody');



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaPromociones.forEach(promocion => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = promocion.idpromocion;
        fila.insertCell().textContent = promocion.nombrePromocion;
        fila.insertCell().textContent = promocion.fechaInicio;
        fila.insertCell().textContent = promocion.fechaFinal;
        fila.insertCell().textContent = promocion.tipoDescuento;
        fila.insertCell().textContent = promocion.idItem;
        fila.insertCell().textContent = promocion.nombreItem;
        fila.insertCell().textContent = promocion.porcentajeDescuento;


    });


};

mostrarDatos();