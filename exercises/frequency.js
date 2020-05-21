/*
frequency(['a', 'b', 'b', 'c', 'b', 'a']) # => ['b', 'a', 'c']
order the items by high to low ocurrency
*/

function frequency(arr) {
  let obj = {};

  arr.forEach((item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });

  return Object.keys(obj).sort(function (a, b) {
    return obj[b] - obj[a];
  });
}

frequency(['a', 'b', 'b', 'c', 'b', 'a']);
