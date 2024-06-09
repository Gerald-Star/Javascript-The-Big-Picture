
/** 
Declaring a constant variable
If the initial value of a variable won’t ever change during the rest of program execution, this variable is called a constant.This constantness can be enforced by using the keyword const instead of let to declare it.Thus, the program is more expressive and further attempts to modify the variable can be detected as errors.

The syntax for declaring a constant variable is:
* ?  const variableName = value;
* ?   where:
* ?   variableName is the name of the constant variable.
* ?   value is the initial value of the constant variable.
* !   The value of a constant variable cannot be changed after it is assigned.
*/


// const variableName = value;

const variableName = 10;
console.log(variableName); // 10

/** 
// !The value of a constant variable cannot be changed after it is assigned
// ? const with a value to change the a value of a constant variable

const a = 3.504; // The value of a cannot be modified
a = 6.28;       // Impossible!

console.log(a); // TypeError: Assignment to constant variable.

// ?  const with no value
 
const variableName0;
console.log(variableName0); // SyntaxError: Missing initializer in const declaration
**/


//  const with a string value

const variableName1 = "Hello";

console.log(variableName1); // Hello

//  const with a boolean value

const variableName2 = true;

console.log(variableName2); // true

//  const with an array value

const variableName3 = [1, 2, 3, 4, 5];

console.log(variableName3); // [1, 2, 3, 4, 5]

//  const with an object value

const variableName4 = { name: "John", age: 25 };

console.log(variableName4); // { name: 'John', age: 25 }

//  const with a function value

const variableName5 = function () {
    return "Hello";
};

console.log(variableName5()); // Hello

//  const with a null value

const variableName6 = null;

console.log(variableName6); // null

//  const with an undefined value

const variableName7 = undefined;

console.log(variableName7); // undefined

//  const with a symbol value

const variableName8 = Symbol("Hello");

console.log(variableName8); // Symbol(Hello)

//  const with a BigInt value

const variableName9 = 9007199254740991n;

console.log(variableName9); // 9007199254740991n

//  const with a regular expression value

const variableName10 = /Hello/;

console.log(variableName10); // /Hello/

//  const with a class value

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const variableName11 = new Person("John", 25);

console.log(variableName11); // Person { name: 'John', age: 25 }


//  const with a Map value

const variableName12 = new Map();

console.log(variableName12); // Map {}

//  const with a Set value

const variableName13 = new Set();

console.log(variableName13); // Set {}

//  const with a WeakMap value

const variableName14 = new WeakMap();

console.log(variableName14); // WeakMap {}

//  const with a WeakSet value

const variableName15 = new WeakSet();

console.log(variableName15); // WeakSet {}

//  const with a generator function value

function* generator() {
    yield 1;
}

const variableName16 = generator();

console.log(variableName16); // Object [Generator] {}




