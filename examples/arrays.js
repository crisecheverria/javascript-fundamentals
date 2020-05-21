/*
How to convert arrays:
- Object.entries()
- Array.from()
- [...item]

Commonly used methods of an Array
.isArray()
.filter()
.reduce()
.concat()
.join()
.pop()
.push()
.map()
 */

// Exercise - Remove Duplicates

function removeDuplicates(str) {
  let words = str.split(' ');
  let uniques = [...new Set(words)];
  return uniques.join(' ');
}
// console.log(removeDuplicates('This is is a test test string'));

function removeDuplicates2(str) {
  let words = str.split(' ');

  return words.filter((w, index) => words.indexOf(w) === index).join(' ');
}
// console.log(removeDuplicates2('This is is a test test string'));

// Exercise - Flat An array

function flatten(arr) {
  return arr.reduce((a, b) => a.concat(b), []);
}

// console.log(flatten([1, 2, [3, 4, [5, 6, 7], 8], 9, 10]));

// Exercise - Animals Mammals
let animals = [
  {
    type: 'Dog',
    mammal: true,
  },
  {
    type: 'Snake',
    mammal: false,
  },
  {
    type: 'Cheetah',
    mammal: true,
  },
];

const mammals = animals.filter((a) => a.mammal);
console.log(mammals);
