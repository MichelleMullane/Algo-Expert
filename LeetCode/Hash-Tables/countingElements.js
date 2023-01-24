// Counting Elements
// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

// Example 1:
// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

// Solution 1:  Use built-in JavaScript Set
// Approach:
// 1. Create a set from the array
// 2. Create an integer variable to store the count, starting at 0
// 3. Traverse the array & at each element in the array, iterate count if the set contains the element + 1
// 4. Return the count variable

var countElements1 = function (arr) {
  let arrSet = new Set(arr);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (arrSet.has(curr + 1)) {
      count++;
    }
  }
  return count;
};
// Time: O(N) to create a new set and loop through the array
// Space:  O(N) to create the new set
console.log("Expected Answer: ", 2);
console.log("Solution 1: ", countElements1([1, 2, 3]));

// Solution 2:  Create hash map using a JavaScript object
// Approach:
// 1. Declare hash as a JavaScript object & a count integer variable
// 2. Traverse the input array to add all values to the hash table with a boolean value
// 3. Traverse the input array again & iterate count if value + 1 exists in the hash table
function countElements2(arr) {
  const hash = {};
  let count = 0;

  for (const value of arr) {
    hash[value] = true;
  }

  for (const value of arr) {
    if (hash[value + 1]) {
      count++;
    }
  }
  return count;
}
console.log("Solution 2: ", countElements2([1, 2, 3]));
