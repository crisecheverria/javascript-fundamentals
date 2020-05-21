/*
let a = 0.1
let b = 0.2

if (a + b == 0.3) {
  console.log('you win')
}
 */

function compareFloats(a, b) {
  if ((a / 100 + b / 100) * 100 == 0.3) {
    console.log('you win');
  }
}

compareFloats(0.1, 0.2);
