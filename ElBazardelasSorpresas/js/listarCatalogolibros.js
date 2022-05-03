const cuerpoTabla = document.querySelector('#tbl-listarLibros tbody');
let listaLibros = [];

const inicializar = async() => {
    listaLibros = await obtenerDatos('listar-libros');
    mostrarDatos();

}



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

inicializar();