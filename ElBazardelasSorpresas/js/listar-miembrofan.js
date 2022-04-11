const cuerpoTabla = document.querySelector('#tbl-listarFan tbody');

const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaMiembros.forEach(miembro => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = miembro.idmembresia;
        fila.insertCell().textContent = miembro.idcliente;
        fila.insertCell().textContent = miembro.nombrecliente;
        fila.insertCell().textContent = miembro.fechaingreso;


    });


};



mostrarDatos();