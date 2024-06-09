

//? TEMPLATE LITERALS

//? Basic literal string creation

// Example 1: Using template literals to create strings

let vacation = "France";
console.log(`I live in ${vacation}`);
// Show "I live in France"

let numx = 3;

let numy = 7;

console.log(`${numx} + ${numy} = ${numx + numy}`);
// Show "3 + 7 = 10"

// Multi-line strings

// Example 2: Using template literals to create multi-line strings

let multiLineString = `This is a

multi-line

string.`;

console.log(multiLineString);

// Show "This is a
// multi-line
// string."


// Expressions

// Example 3: Using template literals to create strings with expressions

let num1 = 3;

let num2 = 7;

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);

// Show "The sum of 3 and 7 is 10."


// ? Template Literal Use Cases
// HTML

// Example 4: Using template literals to create strings with HTML

let title = "Hello";

let body = "World";

let html = `<html>

<head>

<title>${title}</title>

</head>

<body>

<h1>${body}</h1>

</body>

</html>`;

console.log(html);

// Show "<html>
// <head>
// <title>Hello</title>
// </head>
// <body>
// <h1>World</h1>
// </body>
// </html>"

// CSS

// Template literals are string literals that allow you to embed expressions in them. They are enclosed by the backtick (`) (grave accent) character instead of double or single quotes. This allows for more flexibility in creating strings.

// Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (`) get passed to a function. The default function just concatenates the parts into a single string. However, you can use a tagged template to process the string in some way.

// Template literals can be used for multi-line strings. This is useful for strings that span multiple lines.

// Template literals can be used to create strings that contain the values of variables. This is useful for creating strings that depend on some variables.

// Template literals can be used to create strings that contain expressions. This is useful for creating strings that depend on some expressions.

// Template literals can be used to create strings that contain HTML. This is useful for creating strings that contain HTML code.

// Template literals can be used to create strings that contain CSS. This is useful for creating strings that contain CSS code.

// Template literals can be used to create strings that contain JavaScript. This is useful for creating strings that contain JavaScript code.

// Template literals can be used to create strings that contain JSON. This is useful for creating strings that contain JSON data.

// Template literals can be used to create strings that contain SQL. This is useful for creating strings that contain SQL queries.

// Template literals can be used to create strings that contain regular expressions. This is useful for creating strings that contain regular expressions.

// Template literals can be used to create strings that contain Markdown. This is useful for creating strings that contain Markdown code.

// Template literals can be used to create strings that contain YAML. This is useful for creating strings that contain YAML data.

// Template literals can be used to create strings that contain XML. This is useful for creating strings that contain XML code.

// Template literals can be used to create strings that contain CSV. This is useful for creating strings that contain CSV data.

// Template literals can be used to create strings that contain URLs. This is useful for creating strings that contain URLs.

// Template literals can be used to create strings that contain email addresses. This is useful for creating strings that contain email addresses.

// Template literals can be used to create strings that contain phone numbers. This is useful for creating strings that contain phone numbers.

// Template literals can be used to create strings that contain dates. This is useful for creating strings that contain dates.

// Template literals can be used to create strings that contain times. This is useful for creating strings that contain times.

// Template literals can be used to create strings that contain date and time. This is useful for creating strings that contain date and time.
// Basic literal string creation
/**
 * 
 * It is possible to include expressions in a string by using backticks (`) to delimit the string. Such a string is called a template literal. Inside a template literal, expressions are identified by the ${expression} syntax.

This is often used to create strings containing the values of some variables.
 */

const country = "France";
console.log(`I live in ${country}`); // Show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // Show "3 + 7 = 10"


// Use cases of Template Literals


// ? Example 1: Using template literals to create strings