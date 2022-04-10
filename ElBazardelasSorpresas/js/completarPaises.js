const listaPaises = document.querySelector('#slt-paises');

//let paisSeleccionada;

const mostrarPaises = () => {
    paises.Paises.forEach(pais => {
        listaPaises.options.add(new Option(pais.title));
    })

};

mostrarPaises();