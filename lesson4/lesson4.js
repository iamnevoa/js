'use strict';

//1


function numberToObject() {
    var number = parseInt(prompt('Введите число от 0 до 999'));
    var numbers = {};
    if (number <= 999 && number > 0) {

        var hundred = Math.floor(number / 100);
        var ten = Math.floor((number - hundred * 100) / 10);
        var unit = number - ((10 * hundred + ten) * 10);

        numbers['единицы'] = unit;
        numbers['десятки'] = ten;
        numbers['сотни'] = hundred;
    }
    else {
        console.log('Число превышает 999');
    }
    return numbers;
}
numberToObject();

//2

var basket = [
    { product: 'product1', price: 200, amount: 4 },
    { product: 'product2', price: 45, amount: 12 },
    { product: 'product3', price: 72, amount: 30 }
]

function countBasketPrice() {
    var sum = 0;
    basket.forEach(function (item) {
        sum += ((item.price) * (item.amount));
        return sum;
    }
    );
    console.log(sum);
}
countBasketPrice(basket);

//или через for of

function countBasketPrice2() {
    var sum = 0;
    for (const item of basket) {
        sum += ((item.price) * (item.amount));
    }
    console.log(sum);
}

countBasketPrice2(basket);