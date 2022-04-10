const cuerpoTabla = document.querySelector('#tbl-listar10masvendidos tbody');



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    lista10Libros.forEach(libro => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = libro.isbn;
        fila.insertCell().textContent = libro.nombreLibro;
        fila.insertCell().textContent = libro.autor;

    });


};

mostrarDatos();