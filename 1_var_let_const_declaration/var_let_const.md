
# Comments in Javascript

// Single comment in JavaScript

// double comments in JavaScript
/**/

# Role of a variable

A computer program stores data using variables. A variable is an information storage area. We can imagine it as a box in which you can put and store things!

## Variable properties

A variable has three main properties:

1. Its name, which identifies it. A variable name may contain upper and lower case letters, numbers (not in the first position), and characters like the dollar sign ($) or underscore (_).

2. Its value, which is the data stored in the variable.

3. Its type, which determines the role and actions available to the variable.

## Why is JavaScript A Dynamically Typed Language?

In Javascript you don't have to define a variable type explicitly in JavaScript. 

Javascript variable type is deduced from the value stored in the variable and may change while the program runs. That’s why we say that JavaScript is a 'dynamically typed language'. 

Other languages, like C or Java, require variable types to always be defined. This is called static typing.

## Declaring a variable

You have declare a variable by creating it before you store information with a variable! This is called declaring a variable. 
 
Declaring a variable means the computer reserves memory in which to store the variable. The program can then read or write data in this memory area by manipulating the variable.

### Different Types of Variable Declaration

' Check the folder 1_var_let_const_declaration

### Declaring a constant variable

With the const variable declaration, the  initial value of a variable won’t ever change during the rest of program execution, this variable is called a constant.

This is enforced by using the keyword 'const' instead of 'let' to declare it. Thus, the program is more expressive and further attempts to modify the variable can be detected as errors.