// Two Number Sum solved in three ways with time and space complexities

// Solution 1: Nested for loops
function twoNumberSum1(array, targetSum) {
  // Write your code here.
  let retArr = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];

      if (sum === targetSum) {
        retArr.push(array[i], array[j]);
      }
    }
  }
  return retArr;
}
// Time: O(N^2) for iterating N times through an array of N values
// Space:  O(N) to create an array
console.log("solution 1: ", twoNumberSum1([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Solution 2: Look for Y in X + Y = targetSum
function twoNumberSum2(array, targetSum) {
  // Write your code here.
  let retArr = [];

  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    let num2 = targetSum - num1;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === num2) {
        retArr.push(num1, num2);
      }
    }
  }
  return retArr;
}
// Time:  O(N^2) still iterating N times through array of N values
// Space: O(N)
console.log("solution 2: ", twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Solution 3:  Hash Map
function twoNumberSum3(array, targetSum) {
  // Write your code here.
  let retArr = [];
  let nums = new Set();

  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    let num2 = targetSum - num1;

    if (nums.has(num2)) {
      retArr.push(num1, num2);
      break;
    }
    nums.add(num1);
  }
  return retArr;
}
// Time: O(N) iterate up to N times through the array
// Space: O(N) to store the hash map and the return array
console.log("solution 3: ", twoNumberSum3([3, 5, -4, 8, 11, 1, -1, 6], 10));
