
// The while loop
// A while loop lets you repeat code while a certain condition is true.

// The syntax for the while loop is:

// while (condition) {
//    code block to execute
// }

/**
 * * Before each loop iteration, the condition in parentheses is evaluated to determine whether it’s true or not. The code associated with a loop is called its body.

If the condition’s value is true, the code in the while loop’s body runs. Afterwards, the condition is re-evaluated to see if it’s still true or not. The cycle continues!
If the condition’s value is false, the code in the loop stops running or doesn’t run.
 */

let number = 1;
while (number <= 5) {
  console.log(number);
  number++;
}

let num1 = 2;
while (num1 <= 5) {
  console.log(num1);
  num1++;
}

/***
 * 
 * Infinite while loop
The main risk with while loops is producing an infinite loop, 
meaning the condition is always true, and the code runs forever. 
This will crash your program! For example, let’s say you forget a code line 
that increments the number variable
 */

let number1 = 1;
while (number1 <= 5) {
  console.log(number1);
  // The number variable is never updated: the loop condition stays true forever
}