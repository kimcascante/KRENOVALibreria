const cuerpoTabla = document.querySelector('#tbl-listarAutor tbody');
let listaAutores = [];


const inicializar = async() => {
    listaAutores = await obtenerDatos('listar-autores');
    mostrarDatos();

}



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';

    let filtro = document.getElementById('txt-filtroAutor').value.toLowerCase();
    listaAutores.forEach(autor => {
        if (autor.nombre.toLowerCase().includes(filtro)) {
            let fila = cuerpoTabla.insertRow();

            fila.insertCell().innerText = autor.nombre;
            fila.insertCell().innerText = autor.paisnacimiento;
            fila.insertCell().innerText = autor.fechanacimiento;

        }

    });


};

inicializar();
document.getElementById('txt-filtroAutor').addEventListener('keyup', mostrarDatos);