
# WHAT IS TEMPLATE LITERALSß

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.


## How to use template literals in JavaScript

Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes. They allow you to embed expressions in them, which are then evaluated and concatenated with the rest of the string.

// The syntax for template literals is:

// `string text`

// `string text line 1

//  string text line 2`

// `string text ${expression} string text`

// `string text ${expression} string text ${expression} string text`

// The expressions in the placeholders and the text between the backticks (` `) get passed to a function. The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tagged template), the template string is called a "tagged template literal". In that case, the tag expression (usually a function) gets called with the template literal, which you can then manipulate before outputting.

