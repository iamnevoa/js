'use strict';

//1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   a увеличиваетмя на 1, т.е. a=2, выводится 2.
d = b++; alert(d);           // 1   
//     b увеличиваетмя на 1, т.е. b=2, но т.к. ипользован постфикс, 
//     выводится предыдущее значение b (1).
c = (2 + ++a); alert(c);      // 5   a увеличиваетмя на 1, т.е. a=3, 2+3=5, выводится 5
d = (2 + b++); alert(d);      // 4   
//     b увеличиваетмя на 1, т.е. b=3, но т.к. ипользован постфикс, 
//     выводится предыдущее значение b (2), 2+2=4
alert(a);                    // 3   выводится текущее значение a (3)
alert(b);                    // 3   выводится текущее значение b (3)

//2

var a = 2;
var x = 1 + (a *= 2);

// *=2 аналогично возведению в степень 2. 1 + 2**2 = 5


//3

var a = parseInt(prompt('Введите число 1'));
var b = parseInt(prompt('Введите число 2'));
if (a >= 0 && b >= 0) {
    alert('Разница чисел = ' + (a - b));
}
else if (a < 0 && b < 0) {
    alert('Произведение чисел = ' + (a * b));
}
else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    alert('Сумма чисел = ' + (a + b));
}


//4

a = parseInt(prompt('Введите число от 1 до 15'));
switch (a) {
    case 1: console.log('1');
    case 2: console.log('2');
    case 3: console.log('3');
    case 4: console.log('4');
    case 5: console.log('5');
    case 6: console.log('6');
    case 7: console.log('7');
    case 8: console.log('8');
    case 9: console.log('9');
    case 10: console.log('10');
    case 11: console.log('11');
    case 12: console.log('12');
    case 13: console.log('13');
    case 14: console.log('14');
    case 15: console.log('15');
        break;
}

// 5 + 6



function sum(arg1, arg2) {
    return arg1 + arg2;
}

function subtract(arg1, arg2) {
    return arg1 - arg2;
}

function divide(arg1, arg2) {
    return (arg2 === 0) ? 'arg2 не должен равняться 0' : arg1 / arg2;
}

function multiply(arg1, arg2) {
    return arg1 * arg2;
}


function mathOperation(arg1, arg2, operation) {
    switch (operation.toLowerCase()) {
        case 'сложение': return sum(arg1, arg2);
            break;
        case 'вычитание': return subtract(arg1, arg2);
            break;
        case 'деление': return divide(arg1, arg2);
            break;
        case 'умножение': return multiply(arg1, arg2);
            break;
    }
}

const mathOperationResult = mathOperation(20, 35, 'Сложение');
alert(mathOperationResult);
