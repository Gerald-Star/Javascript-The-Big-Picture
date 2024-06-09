
// let declaration

let x = 10;
console.log(x); // 10

// let with no value

let y;
console.log(y); // undefined

// To add a value to the variable, you can do so by assigning a value to it:


y = 3.45;
console.log(y); // 3.45

// let with a string value

let z = "Hello";
console.log(z); // Hello

// let with a number value

let a = 10;

console.log(a); // 10

// let with a boolean value

let b = true;

console.log(b); // true

// let with an object value

let c = { name: "John", age: 25 };

console.log(c); // { name: 'John', age: 25 }

// let with an array value

let d = [1, 2, 3, 4, 5];

console.log(d); // [1, 2, 3, 4, 5]

// let with a function value

let e = function () {
    return "Hello";
};

console.log(e()); // Hello

// let with a null value

let f = null;

console.log(f); // null

// let with a symbol value

let g = Symbol("Hello");

console.log(g); // Symbol(Hello)

// let with a BigInt value

let h = 900

console.log(h); // 900

// let with a regular expression value

let i = /hello/;

console.log(i); // /hello/


// let with a class value

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }

}

let person = new Person("John", 25);

console.log(person.greet()); // Hello, my name is John



// let with a generator function value

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

let u = generator();

console.log(u.next().value); // 1