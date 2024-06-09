
/**
 * 
 * Type Conversions
Understand what type conversions are and how to use them in JavaScript.

An expression’s evaluation can result in type conversions. These are called implicit conversions, as they happen automatically without the programmer’s intervention. For example, using the + operator between a string and a number causes the concatenation of the two values into a string result.
 */
const f = 100;
// Show "Variable f contains the value 100"
console.log("Variable f contains the value " + f);


/***
 * JavaScript is extremely tolerant in terms of type conversion.However, 
 * sometimes conversion isn’t possible.If a value fails to convert into a number, you’ll get the result NaN(Not a Number).
 * /
 
 

// ? Example 1: Type conversion

const g = "five" * 2;
console.log(g); // Show NaN

// ? Example 2: Type conversion

/**
 * Sometimes you’ll wish to convert the value of another type. This is called explicit conversion. JavaScript has the Number() and String() commands 
 * that convert the value between the parenthesis to a number or a string.
 */

const h = "5";
console.log(h + 1); // Concatenation: show the string "51"
const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6

// ? Example 3: Type Boolean conversion

/***
 * JavaScript has another type conversion which is called a boolean conversion. It can convert both Number and String into 
 * boolean and vice versa. Let’s run the below code to see how it works
 */

const string = 'string';
let boolstring = Boolean(string); // true
console.log(boolstring);

const number = 100;
let boolnumber = Boolean(number); // true
console.log(boolnumber);