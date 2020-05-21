/*
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike, he took exactly n steps. For every step he took, he noted if it was an uphill or a downhill step. Gary’s hikes start and end at sea level. We define the following terms:

A mountain is a non-empty sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a non-empty sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary’s sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

Input Format
The first line contains an integer, n, denoting the number of steps in Gary’s hike.

The second line contains a single string of n characters. Each character is ∈ {U, D} (where U indicates a step up and D indicates a step down), and the ith character in the string describes Gary’s ith step during the hike.

Constraints
2 ≤ N ≤ 106

Output Format
Print a single integer denoting the number of valleys Gary walked through during his hike.

Sample Input
8
UDDDUDUU

Sample Output
1

HINT: if Gary was previously at sea level (level == 0). If so, then increment num_valleys.
*/

console.log(countingValleys(8, 'UDDDUDUU'));
function countingValleys(n, steps) {
  let level = 0;
  let num_valleys = 0;

  let arr = steps.split('');
  console.log(arr);
  for (const s of arr) {
    if (s === 'U') {
      level += 1;
    } else {
      if (level == 0) {
        num_valleys += 1;
      }
      level -= 1;
    }
  }
  return num_valleys;
}
