// Falsy values:
// undefined
// null
// ''
// false
// 0
// NaN

countTruthy([1, 2, NaN]);
function countTruthy(array) {
  let counter = 0;
  for (let value of array) {
    if (value) {
      counter++;
    }
  }
  console.log(counter);
}
