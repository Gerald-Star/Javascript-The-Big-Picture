
// ?  The switch statement
// When a program should trigger a block from several operations depending on the value of an expression, you can write it using the JavaScript statement switch to do the same thing.

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



const x = "abc";

switch (x) {
  case "abc":
    console.log("x = abc");
  // break omitted: the next block is also run!
  case "def":
    console.log("x = def");
    break;
}