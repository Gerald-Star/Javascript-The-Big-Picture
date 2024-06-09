
/**
 * 
 * 
 * ? Increment a number variable
You can also increase the value of a number with += and ++. The latter is called the increment operator, as it allows incrementation (increase by 1) of a variable’s value.

In the following example, lines 2 and 3 each increase the value of variable b by 1.
 */

let b = 0;      // b contains 0
b += 1;         // b contains 1
b++;            // b contains 2
console.log(b); // Shows 2

//! You can't use increment operator with a constant variable
/**
 * ? Increment a constant variable
 const a = 0;    // a contains 0
a += 1;         // TypeError: Assignment to constant variable.
a++;            // TypeError: Assignment to constant variable.
console.log(a); // Never executed
 * 
 */





