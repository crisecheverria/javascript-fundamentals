/*
Some info about Strings in JS:
- Primitive Type so they are inmutable
Has build in Functions:
- split()
- toLowerCase()
- substring()
- startsWith()
*/

// Exercise - Reverse a String
function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('Hello World!'));
