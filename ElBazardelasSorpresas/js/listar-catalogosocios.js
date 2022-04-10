const cuerpoTabla = document.querySelector('#tbl-listarSocio tbody');



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaSocios.forEach(socio => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = socio.idsocio;
        fila.insertCell().textContent = socio.nombreSocio;
        fila.insertCell().textContent = socio.direccion;



    });


};

mostrarDatos();