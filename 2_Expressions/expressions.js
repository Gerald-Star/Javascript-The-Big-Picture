

// 3 is an expression whose value is 3
const c = 3;
// c is an expression whose value is the value of c (3 here)
let d = c;
// (d + 1) is an expression whose value is d's + 1 (4 here)
d = d + 1; // d now contains the value 4
console.log(d); // Show 4

/**
 * 
 
Operator priority inside an expression is the same as in math.However, an expression can integrate parenthesis that modify these priorities. 
For example, in the following expression, the parenthesis force the addition to be done before the multiplication:
*/


const result = (3 + 4) * 5; // 35
console.log(result); // Show 35

// 4 is an expression whose value is 4

let e = 4;
// e is an expression whose value is the value of e (4 here)

let f = e;
// (f + 1) is an expression whose value is f's + 1 (5 here)

f = f + 1; // f now contains the value 5

console.log(f); // Show 5

// 5 is an expression whose value is 5


// ? Example 2: Using the increment operator

// 10 is an expression whose value is 10

let g = 10;

// g is an expression whose value is the value of g (10 here)

let h = g;

// (h + 1) is an expression whose value is h's + 1 (7 here)

h = h + 2; // h now contains the value 12

console.log(h); // Show 11

// 12 is an expression whose value is 12


// ? Example 3: Using the increment operator

let m = 3 + 2 * 4; // e contains 11 (3 + 8)
console.log(m);
e = (3 + 2) * 4;   // e contains 20 (5 * 4)
console.log(m);



// ? Example 4: Using the increment operator

let n = 3 * 2 + 4; // f contains 10 (6 + 4)

console.log(n); // Show 10

f = 3 * (2 + 4);   // f contains 18 (3 * 6)

console.log(n); // Show 10

// ? Example 5: Using the increment operator