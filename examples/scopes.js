// Scope Global
// var -> function
// let/const -> block
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

// Source: https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757246#overview
// Source: https://towardsdatascience.com/still-confused-in-js-scopes-f7dae62c16ee

//  ======= CHALLENGE =========

const a = 4;
const foo = () => {
  let z = (y = 0);
  var a = 9;
  z++;
  y += 1;
  return a;
};

foo();

console.log(a);
console.log(y);
console.log(z);
