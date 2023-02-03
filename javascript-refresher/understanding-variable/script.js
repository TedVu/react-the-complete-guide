"use strict";
/*
var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value
*/

// example 1: simple variable declaration
var greeter = "hello world";

console.log(greeter);

// example 2: var allows reassignment of variables
var a = "ted";
a = "kevin";

console.log(a);

// example 3: var can be redeclared
var a = "mia";
console.log(a);

// javascript hoisting: moving all variable declarations to the top of the current scope
// note that the code below will return undefined because it just moves the declration and not the initializations.
console.log(b);
var b = "ted";

/*
    let statement declares a block-scoped
*/

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// this will throw an error as its current scope is the block
console.log(i);

/*************************/
// 4 main differences
// scoping, hoisting, variable redeclaration and variable reassignment
