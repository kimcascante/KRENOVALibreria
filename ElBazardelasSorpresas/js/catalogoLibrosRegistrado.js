const addToShoppingCartButtons = document.querySelectorAll('.dv-button')
console.log(addToShoppingCartButtons);
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.itemLibro')

    const itemImagen = item.querySelector('.lb-imagen').src;
    const itemTitulo = item.querySelector('.lb-title').textContent;
    const itemPrecio = item.querySelector('.lb-precio').textContent;

    addItemToShoppingCart(itemImagen, itemTitulo, itemPrecio);

}

function addItemToShoppingCart(itemImagen, itemTitulo, itemPrecio) {
    const shoppingCartRow = document.createElement('div');

    console.log(itemImagen, itemTitulo, itemPrecio);
}