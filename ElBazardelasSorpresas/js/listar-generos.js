const cuerpoTabla = document.querySelector('#tbl-listarGenero tbody');



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaGeneros.forEach(genero => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = genero.idGenero;
        fila.insertCell().textContent = genero.nombreGenero;


    });


};

mostrarDatos();