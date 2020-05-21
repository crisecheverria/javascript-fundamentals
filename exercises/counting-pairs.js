/*
Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
 */

function countingPairs(n, arr) {
  let obj = {};

  arr.forEach((item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });

  return Object.values(obj).reduce(
    (acc, curr) => acc + Math.floor(curr / 2),
    0
  );
}

console.log(countingPairs(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
