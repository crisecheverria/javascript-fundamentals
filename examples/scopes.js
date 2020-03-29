// Scope Global
var a = 4;
let b = 6;
const c = 8;

console.log('Global Scope: ', a, b, c);

function test() {
  var a = 10;
  let b = 11;
  const c = 12;

  console.log('Function Scope:', a, b, c);
}

test();

{
  var a = 20;
  let b = 26;
  const c = 28;
  console.log('Block Scope: ', a, b, c);
}

for (var a = 0; a < 5; a++) {
  console.log(`a: ${a}`);
}

console.log('Global Scope: ', a, b, c);

// Fuente: https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757246#overview
// Fuente: https://towardsdatascience.com/still-confused-in-js-scopes-f7dae62c16ee
