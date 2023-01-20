// Solve the problem with nested for loops & look at the time & space implications.

function twoNumberSum(array, targetSum) {
  // Write your code here.
  let retArr = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];

      if (sum === targetSum) {
        retArr.push(array[i]);
        retArr.push(array[j]);
      }
    }
  }
  return retArr;
}
// Time: O(N^2) for iterating N times through an array of N values
// Space:  O(1) for a dynamic array, O(N) for a static array
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
