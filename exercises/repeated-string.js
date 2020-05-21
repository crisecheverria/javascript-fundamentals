/*
Write a function or functions that returns the total number of letter “a”’s found by repeating the pattern (S) up to a length of (N)
 */

function repeatedString(s, n) {
  let x = Math.floor(n / s.length);
  let count = (s.split('a').length - 1) * x;
  let rem = n % s.length;

  for (let i = 0; i < rem; i++) {
    if (s.charAt(i) === 'a') {
      count++;
    }
  }

  return count;
}

console.log(repeatedString('aba', 10));
