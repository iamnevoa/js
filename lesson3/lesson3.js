//1

var a = 2;
while (a < 100) {
    var b = 2;
    while (b < a) {
        var c = a % b;
        if (c === 0) break;
        else b++;
    }
    if (c !== 0) console.log(a);
    a++;
}



//2

var arr = [
    ['item1', 200, 4],
    ['item2', 45, 12],
    ['item3', 72, 30],
];

var b = 0;

function countBasketPrice(array) {
    for (var a = 0; a < array.length; a++) {
        b = b + ((array[a][1]) * (array[a][2]));
    }
    console.log(b);
}

countBasketPrice(arr);


//3

for (var i = 0; i <= 9; console.log(i++)) {
}

//4

var b = '';
var a = 1;
while (a <= 20) {
    b = b + 'x';
    console.log(b);
    a++;
}