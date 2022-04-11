const cuerpoTabla = document.querySelector('#tbl-listarImpuestos tbody');



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaImpuestos.forEach(impuesto => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = impuesto.idimpuesto;
        fila.insertCell().textContent = impuesto.nombreimpuesto;
        fila.insertCell().textContent = impuesto.porcentaje;
        fila.insertCell().textContent = impuesto.estado;

    });
};

mostrarDatos();