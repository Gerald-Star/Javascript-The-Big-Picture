# what is a Conditional Statement ?

A conditional statement is a set of rules performed if a certain condition is met.

A condition can evaluates an expression as a value either true or false

The if statement is a conditional statement that runs a block of code if a condition is true.

// The if statement is composed of the following:

// The if keyword followed by a set of parentheses () which is followed by a block of code { }.

// The condition is placed inside the parentheses ().

// The block of code is placed inside the curly braces { }.

// The condition is evaluated to true or false.

// If the condition is true, the block of code inside the if statement is executed.

// If the condition is false, the block of code inside the if statement is not executed.

// The if statement is used to make decisions in code.

// The if statement is used to execute code based on a condition.

// The if statement is used to make decisions in code.

// The if statement is used to execute code based on a condition.

// The if statement is used to make decisions in code.




##  ELSE STATEMENT

The syntax for creating an alternative is to add an else keyword after an initial if.


if (condition) {
  // Code to run when the condition is true
}
else {
  // Code to run when the condition is false
}

An if/else statement like this: “If the condition is true, then execute this first set of code; otherwise, execute this next set of code”. Only one of the two code blocks will be executed

### Run this on the browser using the HTML structure

const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
}
else {
  console.log(`${number} is negative or zero`);
}

The code is the else.html
Explanation
HTML Structure:

The HTML file starts with the <!DOCTYPE html> declaration to ensure standards compliance.
The <head> section contains the title and the embedded JavaScript code within <script> tags.
The <body> is empty but it will execute the JavaScript code when the document content is loaded.
JavaScript Code:

document.addEventListener("DOMContentLoaded", function() {...}); ensures that the JavaScript code runs after the HTML document has been completely loaded.
prompt("Enter a number:") is used to get user input.
Number(prompt(...)) converts the input from a string to a number.
An if statement checks whether the number is positive, and console.log and alert display the appropriate message.
Steps to Run the Code
Copy the entire code above and save it in a file named index.html.
Open the index.html file in a web browser.
A prompt will appear asking you to enter a number.
After entering a number, you will see the result in an alert box and also logged in the console.
Testing the Code
Open your browser's developer tools (usually by pressing F12 or right-clicking on the page and selecting "Inspect").
Go to the "Console" tab to see the console messages.
Enter different numbers in the prompt to see the output.
This code will correctly prompt you for a number and then display whether the number is positive or negative/zero both in an alert and in the browser's console.




### Nesting conditions

Let’s go to the next level and display a specific message if the entered number is zero. See this example, which has a positive test case, negative test case, and a last resort of the number being zero.

const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
} else {
  // number <= 0
  if (number < 0) {
    console.log(`${number} is negative`);
  } else {
    // number === 0
    console.log(`${number} is zero`);
  }
}


### IF ELSE

const weather = prompt("What's the weather like?");

if (weather === "sunny") {
  console.log("T-shirt time!");
} else if (weather === "windy") {
  console.log("Windbreaker life.");
} else if (weather === "rainy") {
  console.log("Bring that umbrella!");
} else if (weather === "snowy") {
  console.log("Just stay inside!");
} else {
  console.log("Not a valid weather type");
}


### SWITCH STATEMENT

switch (expression) {
  case value1:
    // Code to run when the expression matches value1
    break;
  case value2:
    // Code to run when the expression matches value2
    break;
  // ...
  default:
  // Code to run when neither case matches
}


const weather = prompt("What's the weather like?");

switch (weather) {
  case "sunny":
    console.log("T-shirt time!");
    break;
  case "windy":
    console.log("Windbreaker life.");
    break;
  case "rainy":
    console.log("Bring that umbrella!");
    break;
  case "snowy":
    console.log("Winter is coming! Just stay inside!");
    break;
  default:
    console.log("Not a valid weather type");
}


You can set as many cases as you want! The word default, which is put at the end of switch, is optional. It can let you handle errors or unexpected values.

Adding a break; in each block is important so you get out of the switch statement!