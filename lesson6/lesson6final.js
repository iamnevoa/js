'use strict';

var catalog = [{
    id_product: 11,
    product_name: 'product1',
    price: 200,
    quantity: 0,
},
{
    id_product: 21,
    product_name: 'product2',
    price: 45,
    quantity: 0,
},
{
    id_product: 31,
    product_name: 'product3',
    price: 72,
    quantity: 0,
},
{
    id_product: 41,
    product_name: 'product4',
    price: 15,
    quantity: 0,
},

];


function renderCatalog() {

    var catalogItem = document.querySelector('.catalog');

    catalog.forEach(item => {
        catalogItem.insertAdjacentHTML('beforeend', `<div class = "catalog">
                    <div class="text"> <b> Наименование</b>: ` + item.product_name + `</div>
                    <div class="text"> <b>Цена за шт.</b>: ` + item.price + ` руб.</div><br>
                    <div><button class="cart-btn" data-id_product="`+ item.id_product + `">Купить</button></div>
                    <br></div>
                    `);
    })
}

renderCatalog();

var cart = [];

function clickAddButton() {
    var cartButton = document.querySelector('.catalog');
    cartButton.addEventListener('click', clickAddToCart);
}

clickAddButton();

function clickAddToCart(event) {
    renderEmptyCart();
    if (!event.target.classList.contains('cart-btn')) return;
    const id_product = +event.target.dataset.id_product;
    addToCart(id_product);
}

function findProductInCatalog(id_product) {
    return catalog.find(product => product.id_product === id_product);
};

function addToCart(id_product) {
    const product = findProductInCatalog(id_product);
    product.quantity++;
    cart = catalog.filter(product => product.quantity > 0);
    renderCart();
    countCartSum();
    countCartQuantity();
}

function renderCart() {

    var cartItem = document.querySelector('.cart');
    cart.forEach(item => {
        cartItem.insertAdjacentHTML('beforeend', `<div class = "cart">
                  <div class="text"> <b> Наименование</b>: ` + item.product_name + `</div>
                  <div class="text"> <b>Цена за шт.</b>: ` + item.price + ` руб.</div>
                  <div class="text"><b>Количество</b>: ` + item.quantity + ` шт.</div>
                  <div class="text"><b>Стоимость</b>: ` + item.quantity * item.price + ` руб.</div></div >
                      `);
    });
    getCartMessage();
}

renderCart();

function countCartSum() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function countCartQuantity() {
    return cart.reduce((quantity, item) => quantity + item.quantity, 0);
}

function getCartMessage() {
    var cartMessage = document.querySelector('.cart-message');
    if (cart.length > 0)
        cartMessage.innerHTML = '<br>В корзине: ' + countCartQuantity() + ' товара/ов на сумму ' + countCartSum() + ' руб.';
    else cartMessage.innerHTML = '<br>Корзина пуста.';
}


function clickClearCart() {
    var clearCartButton = document.querySelector('.clear-cart');
    clearCartButton.addEventListener('click', clearCart);
}

clickClearCart();

function clearCart() {
    catalog.forEach(item => {
        item.quantity = 0;
    });

    renderEmptyCart();
}

clearCart();

function renderEmptyCart() {

    var cartItem = document.querySelectorAll('.cart');
    for (var i = 0; i < cartItem.length; i++) {
        cartItem[i].innerHTML = '';
    }
    getCartMessage();
}







