const cuerpoTabla = document.querySelector('#tbl-listarPunto tbody');



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaPuntos.forEach(punto => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = punto.idpunto;
        fila.insertCell().textContent = punto.nombrePunto;
        fila.insertCell().textContent = punto.idsocio;
        fila.insertCell().textContent = punto.nombreSocio;
        fila.insertCell().textContent = punto.telefono;
        fila.insertCell().textContent = punto.direccion;



    });


};

mostrarDatos();