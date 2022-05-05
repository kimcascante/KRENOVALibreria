const addToShoppingCartButtons = document.querySelectorAll('.dv-button')
const shoppingCarItem = document.querySelector('.shoppingCarItemsContainer');
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
    //console.log("Click", itemImagen, itemTitulo, itemPrecio);

    addItemToShoppingCart(itemImagen, itemTitulo, itemPrecio);

}

function addItemToShoppingCart(itemImagen, itemTitulo, itemPrecio) {
    //console.log('funcion', itemImagen, itemTitulo, itemPrecio);
    const shoppingCartRow = document.createElement('div');
    /*const shoppingCartContent = `
          <div class="shoppingCart">
           <img class="fotoLibroCarrito" src=${itemImagen}>
           <p class="lb-nombreAutor" for="">${itemTitulo}</p>
           <p class="lb-precio" for="">${itemPrecio}</p>
        </div>`;*/
    const shoppingCartContent = itemImagen + itemTitulo + itemPrecio;

    //console.log('variable', shoppingCartContent);
    shoppingCartRow.innerHTML = shoppingCartContent;
    //console.log('shoppingCartContent', shoppingCartContent);
    //console.log('shoppingCartRow', shoppingCartRow);

    shoppingCarItem.append(shoppingCartRow);
    console.log('Arreglo', shoppingCarItem);

    updateShoppingCarTotal();



}

function updateShoppingCarTotal() {
    let total = 0;
    const shoppingCarTotal = document.querySelector('.shoppingCarTotal');
    const shoppingCarItems = document.querySelectorAll('.shoppingCarItemsContainer');
    console.log('Contenidocarrito', shoppingCarItems);

    shoppingCarItems.forEach(shoppingCarItem => {
        const shoppingCartItemPriceElement = shoppingCarItem.querySelector('.shoppingCartItemsContainer');

        console.log('Elemento', shoppingCartItemPriceElement);

    });
}