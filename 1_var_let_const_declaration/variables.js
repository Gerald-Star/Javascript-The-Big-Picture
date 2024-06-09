// Single comment in JavaScript

// Different Variable Declaration and Initialization

// 1. var without a value

var b;
console.log(b); // undefined

/**
 * * Assign values to variables, the value stored in a variable can change.
 * * To give a new value to a variable, use the = operator called the assignment operator

 * 
 */

// 2. var with a value

var a = 10;
console.log(a); // 10  #console.log is used to print the value of a variable


// 3. var with a string value

var c = "Hello";
console.log(c); // Hello

// 4. var with a boolean value

var d = true;
console.log(d); // true

// 5. var with an array value

var e = [1, 2, 3, 4, 5];
console.log(e); // [1, 2, 3, 4, 5]

// 6. var with an object value
var f = { name: "John", age: 25 };


// 7. var with a function value
var g = function () {
    return "Hello";
};

console.log(g()); // Hello
//explain the code var g = function () { return "Hello"; }; console.log(g()); // Hello

// 8. var with a null value
var h = null;

console.log(h); // null

// 9. var with an undefined value

var i = undefined;

console.log(i); // undefined

// 10. var with a symbol value

var j = Symbol("Hello");
console.log(j); // Symbol(Hello)

// 11. var with a BigInt value

var k = 9007199254740991n;

console.log(k); // 9007199254740991n

// 12. var with a regular expression value

var l = /Hello/;

console.log(l); // /Hello/

// 13. var with a date value

var m = new Date();

console.log(m); // current date and time

// 14. var with a map value

var n = new Map();

console.log(n); // Map {}

// 15. var with a set value

var o = new Set();

console.log(o); // Set {}

// 16. var with a weakmap value

var p = new WeakMap();

console.log(p); // WeakMap {}

// 17. var with a weakset value

var q = new WeakSet();

console.log(q); // WeakSet {}

// 18. var with a promise value

var r = new Promise(function (resolve, reject) {
    resolve("Hello");
});

r.then(function (value) {
    console.log(value); // Hello
});


// 19. var with a class value

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var s = new Person("John", 25);

console.log(s); // Person { name: 'John', age: 25 }

// 20. var with a module value

// Module 1

export var t = 10;

// Module 2

import { t } from './module1.js';

console.log(t); // 10

// 21. var with a generator function value

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

var u = generator();

console.log(u.next().value); // 1

// 22. var with a async function value

async function asyncFunction() {
    return "Hello";
}

var v = asyncFunction();

v.then(function (value) {
    console.log(value); // Hello
});

// 23. var with a async generator function value

async function* asyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

var w = asyncGenerator();

w.next().then(function (value) {
    console.log(value.value); // 1
});

// 24. var with a typed array value

var x = new Int8Array([1, 2, 3, 4, 5]);

console.log(x); // Int8Array [1, 2, 3, 4, 5]

// 25. var with a DataView value

var y = new DataView(new ArrayBuffer(2));

console.log(y); // DataView {}

// 26. var with a proxy value

var z = new Proxy({}, {});

console.log(z); // Proxy {}
