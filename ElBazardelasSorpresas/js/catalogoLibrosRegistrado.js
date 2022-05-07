const addToShoppingCartButtons = document.querySelectorAll('.dv-button')
const shoppingCarItem = document.querySelector('.shoppingCarItemsContainer');
//const containerCart = document.querySelector('.item-shoppingCar');
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
    //updateShoppingCarTotal();

}

function addItemToShoppingCart(itemImagen, itemTitulo, itemPrecio, itemCantidad) {

    //const elementsTitle = shoppingCarItem.getElementsByClassName('.item-shoppingCar');
    //console.log('funcionNo Repita', elementsTitle);

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
                                                    <input type= "number" weight= "40"class="txt-cantidad" for="" min="1" value =1></input>
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
    const shoppingCartContent = `     <div class="item-shoppingCar">                                          
                                                <div class="columna-imagen">
                                                <div class="lb-imagen">
                                                <img  src=${itemImagen} class="Imagenlibro-carrito" alt="" height="80" width="80">
                                                </div>
                                                </div>
                                                <div class="columna-titulo">
                                                <label></label>
                                                <div class="lb-title" >${itemTitulo}</div>
                                                </div>
                                                <div class="columna-precio">
                                                <label>Precio</label>
                                                <div class="lb-precio">${itemPrecio}</div>
                                                </div>
                                                <div class="columna-cantidad">
                                                <label>Cantidad</label>
                                                <div class="txt-cantidad">
                                                <input class="cantidad-carrito" type= "number" size=40 style="with:1px; heigth:1px" min="1" value="1"></input>
                                                <button class="btn-eliminar" type="button">Eliminar</button>
                                                </div>
                                                </div>
                                        </div>`;

    /* `
    <div class="itemLibro">
    <a href="perfilMamitaYunai.html"><img class="lb-imagen" src=${itemImagen} alt="" height="250" width="200"></a>
    <label class="lb-title" for="">${itemTitulo}</label>
    <label>Precio</label>
    <label class="lb-precio" for="">${itemPrecio}</label>
    <label>Cantidad</label>
    <input type= "number" size=40 style="with:1px; heigth:1px" class="txt-cantidad" for="" min="1" value =1></input>
     <input class="cantidad-carrito" type= "number" size=40 style="with:1px; heigth:1px" min="1" value="1"></input>
     <input class="cantidad-carrito" type= "number" size=40 style="with:1px; heigth:1px" min="1" value="1" disabled></input>
    </div>`;*/

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
    //console.log('shoppingCartRow', shoppingCartRow);

    shoppingCarItem.append(shoppingCartRow);
    shoppingCartRow.querySelector('.btn-eliminar').addEventListener('click', removeShoppingCartItem);
    shoppingCartRow.querySelector('.cantidad-carrito').addEventListener('change', cantidadCompra);

    updateShoppingCarTotal()




    // }



}


function updateShoppingCarTotal() {
    carritoVacio += 1;
    let total = 0;

    const shoppingCarTotal = document.querySelector('.shoppingCarTotal');
    //const shoppingCarItems = document.querySelectorAll('.shoppingCarItemsContainer');
    const shoppingCarItems = document.querySelectorAll('.item-shoppingCar');
    console.log('Contenidocarrito', shoppingCarItems);

    shoppingCarItems.forEach(shoppingCarItem => {
        //console.log('Arregloshopping', shoppingCarItem);
        /*const shoppingCartItemElement = shoppingCarItem.querySelector('.itemLibro');
        console.log('Elementoshopping', shoppingCartItemElement);*/
        //const shoppingCarItemAll = shoppingCarItem.querySelector('.item-shoppingCar');
        //console.log('Elementoseparado', shoppingCarItemAll);
        const shoppingCartItemPriceElement = shoppingCarItem.querySelector('.lb-precio');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('₡', ''));

        const shoppingCartItemQuantityElement = shoppingCarItem.querySelector('.cantidad-carrito')
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);




        //console.log('PrecioElemento', shoppingCartItemQuantity);
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;

        console.log('PrecioTotal', total);
        //console.log('Elemento', shoppingCartItemQuantity);
        //console.log('Precio', shoppingCartItemPriceElement);

    });

    shoppingCarTotal.innerHTML = `<label>Precio Total ¢</label>${total.toFixed(2)}`



}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.item-shoppingCar').remove();
    updateShoppingCarTotal();

}

function cantidadCompra(event) {
    const inputCantidad = event.target;
    inputCantidad.value <= 0 ? (input.value = 1) : null;
    updateShoppingCarTotal();

}