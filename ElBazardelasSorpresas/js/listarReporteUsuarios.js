const cuerpoTabla = document.querySelector('#tbl-listarusuariosistema tbody');

let listarUsuario = [];

const inicializar = async() => {
    listarUsuario = await obtenerDatos('listarUsuario');
    mostrarDatos();
}

const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';
    let filtro = document.getElementById('txt-filtroUsuario').value.toLowerCase();


    listarUsuario.forEach(usuario => {
        if (usuario.primerNombre.toLowerCase().includes(filtro)) {

            let fila = cuerpoTabla.insertRow();

            fila.insertCell().textContent = usuario.correoElectronico;
            fila.insertCell().textContent = usuario.primerNombre;
            fila.insertCell().textContent = usuario.primerApellido;
            fila.insertCell().textContent = usuario.identificacion;
            fila.insertCell().textContent = usuario.direccion;

        }
    });


};

inicializar();

document.getElementById('txt-filtroUsuario').addEventListener('keyup', mostrarDatos);
//mostrarDatos();