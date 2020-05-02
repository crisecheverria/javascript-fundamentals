/*
Closure es cuando una función 'recuerda' su scope lexical aún cuando
dicha función es ejecutada fuera de dicho scope. Es gracias a esto
que las funciones pueden ser first citizens en JS.
Fuente: https://frontendmasters.com/courses/javascript-foundations/closure-introduction/
*/

var inicia = function inicia() {
  var nombre = 'Mozilla'; // 'nombre' es una variable local creada por la función 'inicia'
  function muestraNombre() {
    // 'muestraNombre' es una función interna (un closure)
    console.log(nombre); // dentro de esta función usamos una variable declarada en la función padre
  }
  muestraNombre();
};
inicia();

// ----------------------------------------------------
function creaSumador(x) {
  return function (y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2)); // muestra 7
console.log(suma10(2)); // muestra 12

// ========= Problemas solucionables con Closure =============

// No estamos obteniendo un nuevo 'i' en cada iteración.
// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(`i: ${i}`);
//   }, i * 1000);
// }

// Solucion 1: Block Scoping
// for (var i = 1; i <= 5; i++) {
//   let j = i;
//   setTimeout(() => {
//     console.log(`i: ${j}`);
//   }, i * 1000);
// }

// Solucion 2: Block Scoping
// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(`i: ${i}`);
//   }, i * 1000);
// }

// ==================================================

// function fetchData(url) {
//   fetch(url).then(() => {
//     console.log(url);
//   });
// }
// var someURL = 'someURL';
// fetchData(someURL);

// ==================================================================

// Ejemplo del DOM => https://jsfiddle.net/v7gjv
// Solución => https://jsfiddle.net/v7gjv/1

// ============== Emulando métodos privados con Closure ==============
// Conocido como Factory Function ó Constructor Function.
var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(Counter.value());
Counter.increment();
Counter.increment();
console.log(Counter.value());
Counter.decrement();
console.log(Counter.value());
