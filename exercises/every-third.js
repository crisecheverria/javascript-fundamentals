// Print every third element of the array
// Input: list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// Output: c, f, i

function printEveryThird(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i % 3 === 2) console.log(arr[i]);
  //   }
  for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
  }
}

let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
printEveryThird(list);
