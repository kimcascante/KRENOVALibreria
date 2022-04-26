//const botonRegistrar = document.getElementById('btn-registrar ');
//const botonRegistrar2 = document.getElementById('btn-registrar2 ');
//const botonRegistrar3 = document.getElementById('btn-registrar3');
//const listaZona = document.getElementById('slt-zona');
//const listaZona2 = document.getElementById('slt-zona2');
//const listaZona3 = document.getElementById('slt-zona3');
//const inputTarifa = document.getElementById('txttarifa ');
//const inputTarifa2 = document.getElementById('txttarifa2 ');
const listaFormato = document.getElementById('#slt-idencliente');
const elementId = document.getElementById('txtidentifica');
let banderaFormato;



/*document.addEventListener('DOMContentLoaded', function() { applyInputMask('0-0000-0000'); })*/
/*const valorDeCampo = () => {
    let bandera = tipoFormato.value;

    console.log('Valor:', bandera);
    /*let formato = tipoFormato.value;
    let identifica = elementId.value;
    console.log('Tipo de formato:', formato);
    console.log('Valor:', identifica);*/
/*}
valorDeCampo();*/

/*const formatoDeCampo = () => {

    if (formato == 1) {
        valorDeCampo();


    }
}*/

/*elementId.addEventListener('keydown', formatoDeCampo());*/


/*const imprimir = () => {
    let formato = tipoFormato.value;
    let elemento = elementId.value;


    console.log('El tipo de formato es:', formato);
    console.log('Valor introducido:', elemento);
};

elementId.addEventListener('keydown', imprimir());*/
/****************************************************************************** */

/****CODIGO FUNCIONAL****/

/*****************************************************************************************/

/*document.addEventListener('DOMContentLoaded', function() { applyInputMask('0-0000-0000'); })*/

/*********************************************************************************** */
/*
function numberCharactersPattern(pattern) {
    let numberChars = 0;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === '0') {
            numberChars++;
        }
    }
    return numberChars;
}*/
/*************************************************************************** */
/*function isNumeric(char) {
    return !isNaN(char - parseInt(char));

}*/
/************************************************************************** */
/*function maskIt(pattern, value) {
    let position = 0;
    let currentChar = 0;
    let masked = '';
    while (position < pattern.length && currentChar < value.length) {
        if (pattern[position] === '0') {
            masked += value[currentChar];
            currentChar++;
        } else {
            masked += pattern[position];
        }
        position++;
    }
    return masked;

}*/

/**************************************************************************** */
/*function applyInputMask(mask) {
    let inputElement = elementId;
    let content = '';
    let maxChars = numberCharactersPattern(mask);


    inputElement.addEventListener('keydown', function(e) {
        e.preventDefault();
        if (isNumeric(e.key) && content.length < maxChars) {
            content += e.key;
        }
        if (e.key == 8) {
            if (content.length > 0) {
                content = content.substring(0, content.length - 1);

            }
        }
        inputElement.value = maskIt('0-0000-0000', content);
    })
}*/

/******************************************************************************** */

/*****CODIGO MODIFICADO**** */

/******************************************************************************** */
/*document.addEventListener('DOMContentLoaded', function() { applyInputMask('00-0000-0000'); })*/


/******************************************************************************* */
function numberCharactersPattern(pattern) {
    let numberChars = 0;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === '0') {
            numberChars++;
        }
    }
    return numberChars;
}
/*************************************************************************** */
function isNumeric(char) {
    return !isNaN(char - parseInt(char));

}
/************************************************************************** */
function maskIt(pattern, value) {
    let position = 0;
    let currentChar = 0;
    let masked = '';
    while (position < pattern.length && currentChar < value.length) {
        if (pattern[position] === '0') {
            masked += value[currentChar];
            currentChar++;
        } else {
            masked += pattern[position];
        }
        position++;
    }
    return masked;

}
/**************************************************************************** */
function applyInputMask(mask) {
    let inputElement = elementId;
    let content = '';
    let maxChars = numberCharactersPattern(mask);


    inputElement.addEventListener('keydown', function(e) {
        e.preventDefault();
        if (isNumeric(e.key) && content.length < maxChars) {
            content += e.key;
        }
        if (e.key == 8) {
            if (content.length > 0) {
                content = content.substring(0, content.length - 1);

            }
        }
        inputElement.value = maskIt(mask, content);
    })
}

/************************************************************************** */

const mostrarIdentificacion = () => {
    /*tipoFormato.innerHTML = '';
    tipoFormato.options.add(new Option('-- Seleccione una opción --'));*/
    identificacion.Documento.forEach(iden => {
        tipoFormato.options.add(new Option(iden.title));
    });

    /*if (banderaFormato == "Cédula de identidad") {
        applyInputMask('00-0000-0000');


    } else if (banderaFormato == "Número de pasaporte") {
        applyInputMask('00-00-00-00');

    } else if (banderaFormato == "Otro tipo identificación") {
        applyInputMask('000-000-000-000');

    }*/

}

listaFormato.addEventListener('click', () => {
    banderaFormato = listaFormato.value;
    mostrarIdentificacion(banderaFormato);
})