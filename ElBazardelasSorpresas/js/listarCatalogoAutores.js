const cuerpoTabla = document.querySelector('#tbl-listarAutor tbody');
let listaAutores = [];


const inicializar = async() => {
    listaAutores = await obtenerDatos('listar-autores');
    mostrarDatos();

}



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaAutores.forEach(autor => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = autor.nombre;
        fila.insertCell().textContent = autor.foto;
        fila.insertCell().textContent = autor.paisnacimiento;




    });


};

inicializar();