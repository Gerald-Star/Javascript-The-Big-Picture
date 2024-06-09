
// The switch statement evaluates the expression and compares it to the values of the case clauses.

// If the expression matches a case value, the code block is executed.

// If the expression does not match any case value, the code block of the default clause is executed.

// The break statement is used to exit the switch statement.

// The default clause is optional.

// The switch statement is often used as an alternative to the if statement.

// The switch statement is useful when you have multiple conditions to check.

// The switch statement is more readable than the if statement when you have multiple conditions to check.

// The switch statement is more efficient than the if statement when you have multiple conditions to check.

// The switch statement is more efficient than the if statement when you have multiple conditions to check.

/**
 * You can set as many cases as you want! The word default, which is put at the end of switch, is optional. It can let you handle errors or unexpected values.

Adding a break; in each block is important so you get out of the switch statement!
 */



// Solution using an if
if (day === "monday" || day === "Monday") {
  console.log("Tomorrow is Tuesday");
} else if (day === "tuesday" || day === "Tuesday") {
  console.log("Tomorrow is Wednesday");
} else if (day === "wednesday" || day === "Wednesday") {
  console.log("Tomorrow is Thursday");
} else if (day === "thursday" || day === "Thursday") {
  console.log("Tomorrow is Friday");
} else if (day === "friday" || day === "Friday") {
  console.log("Tomorrow is Saturday");
} else if (day === "saturday" || day === "Saturday") {
  console.log("Tomorrow is Sunday");
} else if (day === "sunday" || day === "Sunday") {
  console.log("Tomorrow is Monday");
} else {
  console.log("Unrecognized day!");
}


// Alternative solution using a switch
/* switch (day) {
  case "monday":
    console.log("Tomorrow is tuesday");
    break;
  case "tuesday":
    console.log("Tomorrow is wednesday");
    break;
  case "wednesday":
    console.log("Tomorrow is thursday");
    break;
  case "thursday":
    console.log("Tomorrow is friday");
    break;
  case "friday":
    console.log("Tomorrow is saturday");
    break;
  case "saturday":
    console.log("Tomorrow is sunday");
    break;
  case "sunday":
    console.log("Tomorrow is monday");
    break;
  default:
    console.log("Unrecognized day!");
} */



## NUMBER COMPARISON

Problem statement
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

const number1 = Number(prompt("Enter number 1:"));
const number2 = Number(prompt("Enter number 2:"));

if (number1 < number2) {
  console.log(`${number1} is less than ${number2}`);
} else if (number1 > number2) {
  console.log(`${number1} is greater than ${number2}`);
} else {
  console.log(`${number1} and ${number2} are equal`);
}


## Problem statement

Write a program that accepts a month number (between 11 and 12
12), then show the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

## Solution

We can use multiple === equal operators inside a single if condition using the || operator.


const month = Number(prompt("Enter a month number:"));

// Solution using if
if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  alert("This month has 31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  alert("This month has 30 days");
} else if (month === 2) {
  alert("This month has 28 days");
} else {
  alert("Unknown month!");
}

/* Solution using a switch.
Notice the volontary absence of break statements for months having the same number of days
This limits code duplication in cases
*/
/*switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("This month has 31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("This month has 30 days");
    break;
  case 2:
    alert("This month has 28 days");
    break;
  default:
    alert("Unknown month!");
}*/

// Solution using if and switch
/*if (month >= 1 && month <= 12) {
  let nbdays = 31;
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      nbdays = 30;
      break;
    case 2:
      nbdays = 28;
      break;
  }
  alert(`This month has ${nbdays} days`);
} else {
  alert("Unknown month!");
}*/



