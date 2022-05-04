const cuerpoTabla = document.querySelector('#tbl-listarAutor tbody');
<<<<<<< Updated upstream
=======
let listaAutores = [];


const inicializar = async() => {
    listaAutores = await obtenerDatos('listar-autores');
    console.log(listaAutores);
    mostrarDatos();

}
>>>>>>> Stashed changes



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaAutor.forEach(autor => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = autor.idAutor;
        fila.insertCell().textContent = autor.nombreAutor;
        fila.insertCell().textContent = autor.paisNacimiento;
        fila.insertCell().textContent = autor.fechaNacimiento;




    });


};

mostrarDatos();