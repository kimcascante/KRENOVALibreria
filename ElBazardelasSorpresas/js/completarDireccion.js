const listaProvincias = document.querySelector('#slt-provincias');
const listaCantones = document.querySelector('#slt-cantones');
const listaDistritos = document.querySelector('#slt-distritos');
let provinciaSeleccionada;
let cantonSeleccionado;
const mostrarProvincias = () => {
    distribucion.provincias.forEach(provincia => {
        listaProvincias.options.add(new Option(provincia.title));
    });
};
const mostrarCantones = (nombreProvincia) => {
    listaCantones.innerHTML = '';
    listaCantones.options.add(new Option('-- Seleccione un cantón --'));
    distribucion.provincias.forEach(provincia => {
        if (provinciaSeleccionada == provincia.title) {
            provincia.cantones.forEach(canton => {
                listaCantones.options.add(new Option(canton.title));
            });
        }
    });
};
const mostrarDistritos = (nombreCanton) => {
    listaDistritos.innerHTML = '';
    listaDistritos.options.add(new Option('-- Seleccione un distrito --'));
    distribucion.provincias.forEach(provincia => {
        if (provinciaSeleccionada == provincia.title) {
            provincia.cantones.forEach(canton => {
                if (cantonSeleccionado == canton.title) {
                    canton.distritos.forEach(distrito => {
                        listaDistritos.options.add(new Option(distrito.title));
                    });
                }
            });
        }
    });
};
mostrarProvincias();
listaProvincias.addEventListener('change', () => {
    provinciaSeleccionada = listaProvincias.value;
    mostrarCantones(provinciaSeleccionada);
})
listaCantones.addEventListener('change', () => {
    cantonSeleccionado = listaCantones.value;
    mostrarDistritos(cantonSeleccionado);
})