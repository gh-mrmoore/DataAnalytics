console.log("Hello World!");

var y = 2;
let x = 3;

console.log(x * y);

function sayHello() {
    console.log("Hello again, World!");
}

function addition(a, b) {
    return a + b;
}

arrowAddition = (a, b) => a + b;

function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

function loopList() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}

arrowDouble = (c, d) => arrowAddition(c, d) * 2;

// automatically assumes a return, if you want it to print, include console.log
arrowHello = () => "Say Hello, Arrow.";

sayHello();

console.log(doubleAddition(65, 34));

// wrap the function in console.log since it's not included in the arrow function
console.log(arrowHello());

loopList();