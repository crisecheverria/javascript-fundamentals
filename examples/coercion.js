var x = '9';
var y = 9;

console.log(x == y);
console.log(x === y);

// Comparacion por valor x == Y pero antes uso de Coercion
// Comparacion por valor y tipo x === y

/*
Simply:
== is comparison which allows coercion, 
=== is comparison without coercion.
*/

// every “+” expression that involves a string will result in a string.
14 + ''; // "14"
42 + '0'; // "420"

/*
We can concat strings using “+”, but what will happen if we use “-”? 
It can be used only on numbers, so once again, 
JS will cast the values to be of the same type — this time numbers.
 */
'42' - 7; // 35
'42' - 0; // 42
'42' - '9'; // 33

// Excercise

function isLandscape(width, heigth) {
  return width > heigth;
}

console.log(isLandscape(800, 600));
