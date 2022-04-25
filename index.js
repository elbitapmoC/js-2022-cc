x = 5 // Assign 5 to x

elem = document.getElementById("demo");
elem.innerHTML = x;

var x; // declare x

/* 
  WEIRD right?
  We used the varible BEFORE defining it...
  
  This is hoisting.
  JS's default behavior to move all declarations to the top of the current scope.
*/

var x; // declare x
x = 5 // Assign 5 to x
// Above is an example of what JS will do by default, it moves the declaration above the initialization.


carName = "Volvo";
let carName;
// Can't access 'carName' before initialization. 
// Line 22, it's declared but not initialized.
// |
// Using a let before it's declared will give us an Error(ReferenceError)

// JS Hoists declarations NOT initializations
// Declare example
var x;
x = 5;

// Initialize example
var y = 5; // NOT hoisted.

// We can avoid hoisting issues by declaring variables at the top of the page and/or of the function.