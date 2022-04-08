const cuerpoTabla = document.querySelector('#tbl-listarLibros tbody');



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaLibros.forEach(libro => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = libro.isbn;
        fila.insertCell().textContent = libro.nombreLibro;
        fila.insertCell().textContent = libro.autor;
        fila.insertCell().textContent = libro.inventarioInicial;




    });


};

mostrarDatos();