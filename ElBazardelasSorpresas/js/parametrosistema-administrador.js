const botonRegistrar = document.getElementById('btn-registrar ');
const listaZona = document.getElementById('slt-zona ');
const inputTarifa = document.getElementById('txttarifa ');

const imprimir = () => {
    let zona = listaZona.value;
    let tarifa = inputTarifa.value;


    console.log('El nombre del autor es:', zona);
    console.log('El pais  es:', tarifa);
};
imprimir();

botonRegistrar.addEventListener('click', imprimir);