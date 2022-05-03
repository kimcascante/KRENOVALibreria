const cuerpoTabla = document.querySelector('#tbl-listarLibros tbody');
let listaLibros = [];

const inicializar = async() => {
    listaLibros = await obtenerDatos('listar-libros');
    console.log(listaLibros);
    mostrarDatos();

};



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';
    let filtro = document.getElementById('txt-filtroLibro').value.toLowerCase();

    listaLibros.forEach(libro => {
        if (libro.nombreLibro.toLowerCase().includes(filtro)) {
            let fila = cuerpoTabla.insertRow();

            fila.insertCell().innerText = libro.isbn;
            fila.insertCell().innerText = libro.nombreLibro;
            fila.insertCell().innerText = libro.autor;
            fila.insertCell().innerText = libro.inventarioInicial;

        }


    });


};


inicializar();
document.getElementById('txt-filtroLibro').addEventListener('keyup', mostrarDatos);