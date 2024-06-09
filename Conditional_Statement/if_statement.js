
// If Statement
// The if statement is used to execute a block of code only if a specified condition is true.

// The syntax for the if statement is:
// The if keyword is followed by a condition in parentheses.

// The condition is a comparison between the number variable and 0.

// The block of code to execute is enclosed in curly braces {}.

const number = 10;

if (number > 0) {
  console.log("The number is positive");
}


const number1 = Number(prompt("Enter a number: "));
if (number1 > 0) {
  console.log("The number is positive");
}


const number2 = Number(prompt("Enter a number: "));
if (number2 > 0) {
  console.log( `${number2} is positive`);
}



// True or False Condition

// The condition in an if statement is a boolean expression.

// A boolean expression is an expression that evaluates to true or false.

if (true) {
  console.log("This code will execute");
}
if (false) {
  console.log("This code will not execute");
  // The code inside the block will not execute because the condition is false.
  // The code inside the block will execute because the condition is true.
}

