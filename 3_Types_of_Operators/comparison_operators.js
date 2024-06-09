
// ? Comparison Operators

// Comparison operators are used to compare two values.It returns a boolean value, either true or false.

// Comparison operators includes:

// ? - Equal to(==)

// What is Equal to(==) operator ?

// - The equal to(==) operator is used to compare two values.It returns true if the values are equal, otherwise it returns false.


console.log(10 == 10); // true

console.log(10 == 20); // false

console.log(10 == "10"); // true

console.log(10 == "20"); // false

console.log(10 == 20); // false

console.log(10 == 10); // true




/** 
 * ?  - Not equal or Inequality to(!=)
    what is Not equal to(!=) operator ?
      
  - The not equal to(!=) operator is used to compare two values.It returns true 
  if the values are not equal, otherwise it returns false.
**/


/**
 * In some other programming languages, equality and inequality operators are == and !=. 
They also exist in JavaScript, but it’s safer to use === and !== instead.
 */

/** 
* ? what is the difference between == and ===?
      
*!  - == is used to compare two values, but it does not check the data type of the values.
*!  - == is called the equality operator.
 *!  - == returns true if the values are equal, otherwise it returns false.

*!  - === is used to compare two values, but it also checks the data type of the values
*!  - === is called the strict equality operator.
*!  - === returns true if the values are equal and have the same data type, otherwise it returns false. 
 
**/

// ?  - Strict equal to(===)
/**  
- The strict equal to(===) operator is used to compare two values.
It returns true if the values are equal and have the same data type,
  otherwise it returns false.
**/

// ? - Strict not equal to(!==)  
/** 
- The strict not equal to(!==) operator is used to compare two values.
It returns true if the values are not equal or have different data types, 
otherwise it returns false.

**/

// ? - Logical AND(&&)

// The expression 0 <= number <= 100 is not valid in JavaScript.

// You must use the && operator to combine two conditions.

// The && operator returns true if both conditions are true, otherwise it returns false.

// Example:

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

let number = 50;

if (number >= 0 && number <= 100) {
  console.log("The number is between 0 and 100");
}

// The number is between 0 and 100


let num = 4;

if ((num >= 0) && (num <= 100)) {
  console.log(`${num} is between 0 and 100, both included`);
}


let num1 = 4;

if ((num1 >= 10) && (num1 <= 100)) {
  console.log(`${num1} is between 0 and 100, both included`);
} else {
  console.log(`${num1} is not between 0 and 100`)
}

// ? - Logical OR(||)

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// what is Logical OR(||) operator ?

// - The logical OR(||) operator is used to combine two or more conditions.
// It returns true if any of the conditions are true, otherwise it returns false.

const number1 = -1;

if ((number1 < 0) || (number1 > 100)) {
  console.log(`${number1} is not in between 0 and 100`);
}




//  - Logical NOT(!)

// *   what is Logical NOT(!) operator ?

//*  - The logical NOT(!) operator is used to reverse the result of a condition.
//*  It returns true if the condition is false, and false if the condition is true.

console.log(!true);  // false
console.log(!false); // true


const num2 = 60;

if (!(num2 >= 100)) {
  console.log(`${num2} is less than or equal to 100`);
}


// There are some more logical operators in addition to the above. e.g., &&=, ||=, and ??= operators.

// ? - Conditional(ternary) operator(?:)
/** 
 * ? - Ternary operator(?: )
    
    what is Ternary operator(?: ) ?
      
  - The ternary operator(?: ) is used to assign a value to a variable based on a condition.It is a shorthand for the if-else statement.
  
  - typeof
    
  what is typeof operator ?
      
  - The typeof operator is used to get the data type of a value.It returns a string that represents the data type of the value.
    

  /** 
    - Example:
  
    - Greater than(>)
  
    - Greater than or equal to(>=)
  
    - Less than(<)
  
    - Less than or equal to(<=)
  **/

/**
 - instanceof
   
 what is instanceof operator ?
   
 - The instanceof operator is used to check if an object is an instance of a specific class or constructor function.It returns true if the object is an instance of the class, otherwise it returns false.
   
 - in
   
 what is in operator ?
   
 - The in operator is used to check if a property exists in an object or an element exists in an array.It returns true if the property or element exists, otherwise it returns false.
   
 - delete
   
 what is delete operator ?
   
 - The delete operator is used to delete a property from an object or an element from an array.It returns true if the property or element is deleted successfully, otherwise it returns false.
   
 - void
   
 what is void operator ?
   
 - The void operator is used to evaluate an expression without returning a value.It returns undefined.

 **/