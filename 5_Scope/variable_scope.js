
// Scope variable declaration
// The scope of a variable is the region of code where it is defined.
// In JavaScript, variables can be declared in different scopes,
// ? such as global scope, function scope, and block scope.

// Global scope

/**
 * What is a Global Scope?
 * The scope of a variable declared outside a function is global.
 */
let num1 = 0; // Global scope
{
  num1 = 1; // OK : num1 is declared in the parent block
  const num2 = 0; // Block scope
}
console.log(num1); // OK : num1 is declared in the current block and the parent block
//! console.log(num2); // Error! num2 is not visible here is a ReferenceError


// Global scope

let students = ["John", "Jane", "Jack", "Jill"]; // Global scope

function displayStudents() { // Function scope
  console.log(students); // Access the global variable
}

displayStudents(); // ["John", "Jane", "Jack", "Jill"]  // Access the global variable


// Global scope

let sweetVegetables = ["Carrot", "Tomato", "Potato", "Onion"];

function displayVegetables() {
  console.log(sweetVegetables);
}

displayVegetables(); // ["Carrot", "Tomato", "Potato", "Onion"] 




// ? Function scope
/** What is a function Scope?
 *
 * The scope of a variable declared with var is limited to the function where it is declared.
 */

function myFunction() {  // Function scope
  let num3 = 15;  // Function scope
  {
    num3 = 7; // OK : num3 is declared in the parent block
    const num4 = 0;  // Block scope
  }
  console.log(num3); // OK : num3 is declared in the current block
  // console.log(num4); // Error! num4 is not visible here
}
//!console.log(num3); // Error! num3 is not visible here
myFunction();  // 7


// ? Function scope

function familyName() {
  let lastName = "Doe"; // Function scope
  {
    lastName = "Smith"; // OK : lastName is declared in the parent block
    const firstName = "John"; // Block scope
  }
  console.log(lastName); // OK : lastName is declared in the current block
  // console.log(firstName); // Error! firstName is not visible here

}

familyName(); // Smith

// ? Function scope

// use cases of function scope

function sum(a, b) {
  let result = a + b;
  return result;
}

console.log(sum(5, 10)); // 15

// ? Function scope

function studentName(firstName, familyName) { // Function scope
  let fullName = firstName + " " + familyName; // Function scope
  return fullName; // Return the full name
}

console.log(studentName("John", "Doe")); // John Doe


// ? Function Scope

function studentName1() {
  let firstName = "John"; // Function scope
  {
    firstName = "Jane"; // OK : firstName is declared in the parent block
    const familyName = "Doe"; // Block scope
  }
  console.log(firstName); // OK : firstName is declared in the current block
  // console.log(familyName); // Error! familyName is not visible here
}

studentName1(); // Jane


// ? Function scope with map of scores

function displayScores() {
  let scores = new Map(); // Function scope

  scores.set(1, 100); // Access the function variable

  scores.set(2, 90); // Access the function variable

  scores.set(3, 80); // Access the function variable

  scores.set(4, 70); // Access the function variable

  console.log(scores); // Map { 1 => 100, 2 => 90, 3 => 80, 4 => 70 }

}




// ? Block scope

{
  let num5 = 10;
  {
    num5 = 5; // OK : num5 is declared in the parent block
    const num6 = 0;
  }
  console.log(num5); // OK : num5 is declared in the current block
  // console.log(num6); // Error! num6 is not visible here
}

//! console.log(num5); // Error! num5 is not visible here


// ? Block scope with list of students



{
  let students = ["John", "Jane", "Jack", "Jill"]; // Block scope

  function displayStudents() { // Function scope
    console.log(students); // Access the block variable
  }

  displayStudents(); // ["John", "Jane", "Jack", "Jill"]  // Access the block variable

}

//! console.log(students); // Error! students is not visible here

// what happened in this code above?

// The students variable is declared in the block scope.

// The displayStudents function is defined in the block scope.

// The displayStudents function accesses the students variable in the block scope.

// The displayStudents function is called in the block scope.

// The students variable is accessible in the block scope.

// The students variable is not accessible outside the block scope.

// The students variable is not accessible in the global scope.

// The students variable is not accessible in the function scope.

// The students variable is not accessible in the nested block scope.

// The students variable is not accessible in the nested function scope.


// ? Block scope

{
  let vegetables = ["Carrot", "Tomato", "Potato", "Onion"]; // Block scope

  function displayVegetables() { // Function scope
    console.log(vegetables); // Access the block variable
  }

  displayVegetables(); // ["Carrot", "Tomato", "Potato", "Onion"]  // Access the block variable
}


//! console.log(vegetables); // Error! vegetables is not visible here


//? Block Scope

{
  let myFamilyName = "Ulrich"; // Block scope
  {
    myFamilyName = "Smith"; // OK : myFamilyName is declared in the parent block
    const myFirstName = "John"; // Block scope

  }
  console.log(myFamilyName); // OK : myFamilyName is declared in the current block
}

//! console.log(myFamilyName); // Error! myFamilyName is not visible here



// ? Block Scope with function

{
  let cityCountryFullName = []; // Block scope
  {
    function displayFullCityCountryName(cityName, countryName) {
      let fullName = cityName + " " + countryName // Function scope
      return fullName;

    }
    displayFullCityCountryName("Berlin", "Germany"); // Berlin Germany

  }
  console.log(cityCountryFullName); // [] // Access the block variable
  console.log(displayFullCityCountryName("Berlin", "Germany")); // Berlin Germany
}

//! console.log(cityCountryFullName); // Error! cityCountryFullName is not visible here

//! displayFullCityCountryName("Berlin", "Germany"); // Error! displayFullCityCountryName is not visible here


// Use Cases of Block Scope

{

  let touristCityCountryName = []; // Block scope

  function displayTouristCityCountryName(cityName, countryName) { // Function scope
  
    let touristName = cityName + " " + countryName // Function scope
  
    touristCityCountryName.push(touristName); // Access the block variable
  
  }

  displayTouristCityCountryName("Berlin", "Germany"); // Berlin Germany

  displayTouristCityCountryName("Paris", "France"); // Paris France

  displayTouristCityCountryName("London", "England"); // London England

  console.log(touristCityCountryName); // ["Berlin Germany", "Paris France", "London England"]

}

//! console.log(touristCityCountryName); // Error! cityCountryFullName is not visible here

//! displayTouristCityCountryName("Berlin", "Germany"); // Error! displayFullCityCountryName is not visible here

//! displayTouristCityCountryName("Paris", "France"); // Error! displayFullCityCountryName is not visible here


//Example of a Push Method
function displayPush() {
  let studentNames = ["John", "Jane", "Jack", "Jill"]; // Block scope
  studentNames.push("James");
  console.log(studentNames);

}
//call the function
displayPush(); // ["John", "Jane", "Jack", "Jill", "James"]



// ? Block Scope with map of students

{
  let students = new Map(); // Block scope

  students.set(1, "John"); // Access the block variable

  students.set(2, "Jane"); // Access the block variable

  students.set(3, "Jack"); // Access the block variable

  students.set(4, "Jill"); // Access the block variable

  console.log(students); // Map { 1 => 'John', 2 => 'Jane', 3 => 'Jack', 4 => 'Jill' }

}

//! console.log(students); // Error! students is not visible here


// ? Nested scope

{
  let num7 = 10;
  {
    let num8 = 5;
    {
      num8 = 7; // OK : num8 is declared in the parent block
      const num9 = 0;
    }
    console.log(num8); // OK : num8 is declared in the current block
    // console.log(num9); // Error! num9 is not visible here
  }
  console.log(num7); // OK : num7 is declared in the parent block
  // console.log(num8); // Error! num8 is not visible here
}

//! console.log(num7); // Error! num7 is not visible here
//! console.log(num8); // Error! num8 is not visible here