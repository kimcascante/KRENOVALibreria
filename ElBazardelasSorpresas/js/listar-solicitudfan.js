const cuerpoTabla1 = document.querySelector('#tbl-solicitudFan tbody');



const mostrarDatos1 = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla1.innerHTML = '';


    listaSolicitud.forEach(solicitud => {
        let fila = cuerpoTabla1.insertRow();

        fila.insertCell().textContent = solicitud.idcliente;
        fila.insertCell().textContent = solicitud.nombrecliente;
        fila.insertCell().textContent = solicitud.acumuladocompra;
        fila.insertCell().textContent = solicitud.estadomembresia;
        fila.insertCell().textContent = solicitud.pendientecompra;


    });


};

mostrarDatos1();