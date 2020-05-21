/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 */

console.log(typeof variable); // Output: undefined
// In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.

console.log(variable); // Output: ReferenceError: variable is not defined
// In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.

/*
As we mentioned before, all variable and function declarations are hoisted to the top of their scope. I should also add that variable declarations are processed before any code is executed.

However, in contrast, undeclared variables do not exist until code assigning them is executed.
 */
