const cuerpoTabla = document.querySelector('#tbl-listarusuariosistema tbody');



const mostrarDatos = () => {
    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';


    listaUsuarios.forEach(usuario => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = usuario.correo;
        fila.insertCell().textContent = usuario.nombre;
        fila.insertCell().textContent = usuario.nacimiento;

    });


};

mostrarDatos();