const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 3, 4, 7, 8, 9];

// ForEach

let combineArr = [];

arr1.forEach((value) => {
  if (!arr2.includes(value)) {
    combineArr.push(value);
  }
});

console.log(combineArr);
combineArr = combineArr.concat(arr2);
console.log(combineArr);

// Filter
const unique = arr1.concat(arr2.filter((value) => !arr1.includes(value)));
console.log(unique);

// reduce
const array1 = [1, 2, 3, 4];
const reducer = (acc, current) => acc + current;

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));

let uniqueArr = arr1.concat(arr2).reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(uniqueArr);

// Set
const mySet = new Set([...arr1, ...arr2]);
console.log(mySet);

const newArr = [...mySet];
console.log(newArr);
