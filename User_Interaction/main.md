# User Interaction in JAVASCRIPT

## Entering User Interaction

During execution, a dialog box pops up, asking for your name.




This is the result of the JavaScript command prompt("Enter your first name:").

Type your name and click OK. You’ll then get a personalized greeting.




## Further Explanation

// The prompt() function displays a dialog box that prompts the visitor for input.
// A prompt box is often used if you want the user to input a value before entering a page.


// The alert() function displays an alert box with a specified message and an OK button.

// An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

The alert() method returns undefined.


The backticks (`) are used to create template literals. Template literals are string literals that allow you to embed expressions in them. They are enclosed by the backtick (`) (grave accent) character instead of double or single quotes. This allows for more flexibility in creating strings.

The ${} syntax is used to embed expressions in template literals. The expressions are evaluated and the result is inserted into the string.

The prompt() function displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page.


## Displaying information

Both console.log() (encountered in the previous chapter) and alert() can be used to display information to the user. Unlike alert(), console.log() does not stop program execution and is often a better choice.

console.log() can also display several comma-separated values at once.



## Entering a number

Regardless of the entered data, the prompt() command always returns a string value. If this value is to be used in numerical expressions, it must be converted into a number with the Number() command.