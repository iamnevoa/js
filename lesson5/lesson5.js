'use strict';



//1

var colNames = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var rowNames = ['', '8', '7', '6', '5', '4', '3', '2', '1'];

function chess() {
    var table = document.createElement('table');
    const outerRow = document.createElement('tr');
    for (let b = 0; b < 9; b++) {
        const col = document.createElement('td');
        col.innerHTML = colNames[b];
        col.style.width = '30px';
        col.style.height = '30px';
        outerRow.appendChild(col);
    }
    table.appendChild(outerRow);

    for (let a = 2; a <= 9; a++) {
        const row = document.createElement('tr');
        const col = document.createElement('td');
        col.innerHTML = rowNames[a - 1];
        row.appendChild(col);
        for (let i = 1; i < 9; i++) {
            const col = document.createElement('td');
            row.appendChild(col);
            col.style.width = '30px';
            col.style.height = '30px';

            if (((a % 2 === 0) && (i % 2 === 0)) || ((a - i) % 2 === 0)) {
                col.style.backgroundColor = 'black';
            }
            else {
                col.style.backgroundColor = 'white';
                col.style.border = 'thin solid black'
            }
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
    table.style.borderSpacing = '0px';
    table.style.textAlign = 'center';
}

chess();

// 3

function readQuantity() {
    var input = parseInt(prompt('Введите количество товара'), 10);
    if (!Number.isInteger(input) || (input < 0)) input = parseInt(prompt('Надо ввести число!\nВведите количество товара'), 10);
    return input;
}

var basket = [
    { product: 'product1', price: 200, quantity: readQuantity() },
    { product: 'product2', price: 45, quantity: readQuantity() },
    { product: 'product3', price: 72, quantity: readQuantity() },
    { product: 'product4', price: 15, quantity: readQuantity() },
];

function renderBasket() {
    var colNames = ['Товар', 'Цена', 'Количество', 'Сумма'];
    var table = document.createElement('table');
    var outerRow = document.createElement('tr');
    for (let i = 0; i < colNames.length; i++) {
        const col = document.createElement('td');
        col.innerHTML = colNames[i];
        col.style.width = '100px';
        col.style.border = 'thin solid black';
        outerRow.appendChild(col);
    }
    table.appendChild(outerRow);
    for (const item of basket) {

        var row = document.createElement('tr');
        var col = document.createElement('td');
        col.style.border = 'thin solid black';
        col.innerHTML = item.product;
        row.appendChild(col);
        col = document.createElement('td');
        col.style.border = 'thin solid black';
        col.innerHTML = item.price;
        row.appendChild(col);
        col = document.createElement('td');
        col.style.border = 'thin solid black';
        col.innerHTML = item.quantity;
        var check = col.innerHTML;
        row.appendChild(col);
        col = document.createElement('td');
        col.style.border = 'thin solid black';
        col.innerHTML = item.price * item.quantity;
        row.appendChild(col);
        if (check > 0) table.appendChild(row);
    }
    document.body.appendChild(table);
    table.style.borderSpacing = '0px';
    table.style.textAlign = 'center';
    table.style.border = 'thin solid black';
}

renderBasket();

function countBasketPrice() {
    var basketMessage = document.createElement('div');
    var basketSum = 0;
    var basketQuantity = 0;

    for (const item of basket) {
        basketSum += item.price * item.quantity;
        basketQuantity += item.quantity;
    }

    if (basketQuantity > 0) basketMessage.innerHTML = '<br>В корзине: ' + basketQuantity + ' товара/ов на сумму ' + basketSum + ' рублей.';
    else basketMessage.innerHTML = '<br>Корзина пуста.';
    document.body.appendChild(basketMessage);
}

countBasketPrice();