// User Interactions


/***
 * Entering information
Once you start using variables, you can write programs that exchange information with the user.
 */

const fname = prompt("Enter your name: ");
alert(`Hello, ${fname}`);


// The prompt() function displays a dialog box that prompts the visitor for input.
// A prompt box is often used if you want the user to input a value before entering a page.



// Displaying User Information

/**
 * You can also display information to the user.
 * Unlike alert(), console.log() does not stop program execution and is often a better choice.
    console.log() can also display several comma-separated values at once.
 */

const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); // Show "36.9 37.6 37.1"


// The console.log() function writes a message to the console.

// The console.log() function is often used for debugging purposes.

// If you want to display a message or a value, you can use the console.log() function.


// Entering a number of a data

const input = prompt("Enter a number:"); // input's type is string
const nb = Number(input); // nb's type is number
console.log(nb); // Show the number entered by the user

// Both operations can be combined in one line for the same result.

const nb1 = Number(prompt("Enter a number:")); // nb's type is number
alert(nb1); // Show the number entered by the user


// CODING CHALLENGE

// ? Challenge 1
// Write a program that asks for your first and last name and shows both after entring them

const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
console.log(`Hello, ${firstName} ${lastName}`);
// Alternative solution using string concatenation
// console.log("Hello, " + firstName + " " + lastName);


// ? Challenge 2


/** 
Write a program that asks the user for a raw price.
After that, it calculates the corresponding final price using a VAT rate of
20.6

Prompt user to enter the raw price, let’s say user entered
1200
1200
**/
const rawPrice = Number(prompt("Enter the raw price:"));
// VAT rate = 20.6%
const vatRate = 20.6 / 100;
const finalPrice = rawPrice * (1 + vatRate);
console.log(`The final price is ${finalPrice}`);


// Solution: Celsius to Fahrenheit Conversion
/** 
Let's see the solution to the Celsius to Fahrenheit Conversion challenge.
**/

const tempCel = Number(prompt("Enter a temperature in Celsius degrees:"));
const tempFar = tempCel * 9 / 5 + 32;
console.log(`${tempCel}°C = ${tempFar}°F`);


/***
 * Explanation
Line 1: Convert the input string to numeric type and store this temperature in tempCel.
Line 2: Apply the conversion formula to tempCel and store the value in tempFar.
 */



// Variable Swapping

/**
 * Problem statement
Observe the following program and add the necessary code 
to swap the values of variables number1 and number2.
 */



let number1 = 5;
let number2 = 3;

let temp = number1;
number1 = number2;
number2 = temp;

console.log(number1); // Should show 3
console.log(number2); // Should show 5

// Line 4 - 6: Swap the value of number1 with number2 using the temp variable.

