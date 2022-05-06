const addToShoppingCartButtons = document.querySelectorAll('.dv-button')
const shoppingCarItem = document.querySelector('.shoppingCarItemsContainer');
let carritoVacio = 0;
let cantidadActual = 0;
//const shoppingCarItem = document.getElementById('contenidoCarrito');
//console.log(addToShoppingCartButtons);

addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.itemLibro')

    const itemImagen = item.querySelector('.lb-imagen').src;
    const itemTitulo = item.querySelector('.lb-title').textContent;
    const itemPrecio = item.querySelector('.lb-precio').textContent;
    const itemCantidad = 1;
    //console.log("Click", itemImagen, itemTitulo, itemPrecio);

    addItemToShoppingCart(itemImagen, itemTitulo, itemPrecio, itemCantidad);

}

function addItemToShoppingCart(itemImagen, itemTitulo, itemPrecio, itemCantidad) {
    //console.log('funcion', itemImagen, itemTitulo, itemPrecio);

    //  let insertarItem = 0;
    //const addshoppingCarItems = document.querySelectorAll('.shoppingCarItemsContainer');

    /*if (carritoVacio > 0) {
        console.log('CarritoNoEstaVacio')
        addshoppingCarItems.forEach(shoppingCarItem => {
            const shoppingCartItemTitle = shoppingCarItem.querySelector('.lb-title').textContent;
            const shoppingCartItemQuantityElementTitle = shoppingCarItem.querySelector('.txt-cantidad');
            const shoppingCartItemQuantityTitle = Number(shoppingCartItemQuantityElementTitle.value);
            console.log('Tituloguardado', shoppingCartItemQuantityTitle)
            if (shoppingCartItemTitle == itemTitulo) {
                console.log('Titulosiguales', shoppingCartItemQuantityTitle)
                //cantidadActual = shoppingCartItemQuantityTitle;
                cantidadActual += 1;
                console.log(cantidadActual)
                shoppingCartItemQuantityElementTitle.innerHTML = ` ${cantidadActual}`

            } else {

                insertarItem = 1;
            }
        });
        if (insertarItem == 1) {
            const shoppingCartRow = document.createElement('div');
            const shoppingCartContent = `
                                                    <div class="itemLibro">
                                                    <a href="perfilMamitaYunai.html"><img class="lb-imagen" src=${itemImagen} alt="" height="250" width="200"></a>
                                                    <label class="lb-title" for="">${itemTitulo}</label>
                                                    <label>Precio</label>
                                                    <label class="lb-precio" for="">${itemPrecio}</label>
                                                    <label>Cantidad</label>
                                                    <input type= "number" class="txt-cantidad" for="" min="1" value =1></input>
                                                    </div>`;

            /*const shoppingCartContent = `
                <div class="shoppingCart">
                <img class="fotoLibroCarrito" src=${itemImagen}>
                <p class="lb-nombreAutor" for="">${itemTitulo}</p>
                <p class="lb-precio" for="">${itemPrecio}</p>
                </div>`;*/
    //const shoppingCartContent = itemImagen + itemTitulo + itemPrecio;

    //console.log('variable', shoppingCartContent);
    // shoppingCartRow.innerHTML = shoppingCartContent;
    //console.log('shoppingCartContent', shoppingCartContent);
    //console.log('shoppingCartRow', shoppingCartRow);

    /*shoppingCarItem.append(shoppingCartRow);
            console.log('CartRow', shoppingCartRow);
            console.log('Arreglo', shoppingCarItem);
        }
    } else {
*/
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
                                                <div class="itemLibro">
                                                <a href="perfilMamitaYunai.html"><img class="lb-imagen" src=${itemImagen} alt="" height="250" width="200"></a>
                                                <label class="lb-title" for="">${itemTitulo}</label>
                                                <label>Precio</label>
                                                <label class="lb-precio" for="">${itemPrecio}</label>
                                                <label>Cantidad</label>
                                                <input type= "number" class="txt-cantidad" for="" min="1" value =1></input>
                                                </div>`;

    /*const shoppingCartContent = `
        <div class="shoppingCart">
        <img class="fotoLibroCarrito" src=${itemImagen}>
        <p class="lb-nombreAutor" for="">${itemTitulo}</p>
        <p class="lb-precio" for="">${itemPrecio}</p>
        </div>`;*/
    //const shoppingCartContent = itemImagen + itemTitulo + itemPrecio;

    //console.log('variable', shoppingCartContent);
    shoppingCartRow.innerHTML = shoppingCartContent;
    //console.log('shoppingCartContent', shoppingCartContent);
    console.log('shoppingCartRow', shoppingCartRow);

    shoppingCarItem.append(shoppingCartRow);





    // }


    updateShoppingCarTotal();
}


function updateShoppingCarTotal() {
    carritoVacio += 1;
    let total = 0;

    const shoppingCarTotal = document.querySelector('.shoppingCarTotal');
    const shoppingCarItems = document.querySelectorAll('.shoppingCarItemsContainer');
    //console.log('Contenidocarrito', shoppingCarItems);

    shoppingCarItems.forEach(shoppingCarItem => {
        const shoppingCartItemPriceElement = shoppingCarItem.querySelector('.lb-precio');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('₡', ''));
        const shoppingCartItemQuantityElement = shoppingCarItem.querySelector('.txt-cantidad')
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        console.log('PrecioElemento', shoppingCartItemPriceElement);
        //total = total + (shoppingCartItemPrice * shoppingCartItemQuantity);

        console.log('Total', shoppingCartItemPrice);
        //console.log('Elemento', shoppingCartItemQuantity);
        //console.log('Precio', shoppingCartItemPriceElement);

    });



}