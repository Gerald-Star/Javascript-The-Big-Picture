
// For Loop

// The for loop is a control structure that allows you to repeat a block of code a number of times. The for loop has the following syntax:

// for (initialization; condition; final expression) {

//   code block to execute

// }

// The for loop has three parts:

// Initialization: The initialization statement is executed before the loop starts. It’s usually used to define and set the initial value of the loop control variable.

// Condition: The condition is evaluated before each loop iteration. If the condition’s value is true, the code block in the loop runs. If the condition’s value is false, the code block doesn’t run.

// Final expression: The final expression is executed at the end of each loop iteration. It’s usually used to increment or decrement the loop control variable.

// The for loop is used when you know how many times you want to repeat a block of code. The for loop is more concise than the while loop.

let number;
for (number = 2; number <= 4; number++) {
  console.log(number);
}


// Loop Counter

// The loop counter is a variable that keeps track of the number of iterations in a loop. 
// The loop counter is used to control the loop’s execution.

// In the for loop, the loop counter is the variable that’s initialized, tested, and updated in the loop’s header.
// The variable used during initialization, condition, and the final expression of a loop is called a counter.This counter can be declared in the loop initialization to limit its scope to the loop body.

for (let i = 1; i <= 5; i++) {
  console.log(i); // OK
}
// ! console.log(i); // Error: the i variable is not visible here

// The loop counter is declared in the for loop’s initialization statement.
//The loop counter is used to control the loop’s execution.
//The loop counter is only visible within the for loop’s body.


for (let i = 1; i <= 5; i++) {
  console.log(i);
  i++; // The i variable is updated in the loop body
}