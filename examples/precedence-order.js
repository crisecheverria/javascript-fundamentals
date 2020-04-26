/*
Orden de Precedencia en JS:
1.- Asignación de variables
2.- Declaración de función
3.- Declaración de varriable

*/

// Challenge!!
var foo = 22;

function foo(foo) {
  return foo * 2;
}

console.log(typeof foo);

// Hoisting
var age = 21;
var getAge = function () {
  console.log(age);
  var age = 20;
};

getAge();

// Hoisting challenge 2:
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
