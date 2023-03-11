// Largest Unique Number
// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

// Approach:
// 1. Create a result variable, default to -1.
// 2. Create a hash map.
// 3. Iterate through the array, counting the number of occurences of each value.
// 4. Iterate through hash map, update the result if the value is larger than the current value and the occurrence is equal to 1.

function largestUniqueNumber(nums) {
  let result = -1;
  let count = new Map();

  for (let i = 0; i < nums.length; i++) {
    count.set(nums[i], (count.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of count) {
    if (value === 1) {
      result = Math.max(result, key);
    }
  }
  return result;
}
// Time:  O(N) to iterate through N values of the nums array, insert into a hash map and iterature through N values of the hash map.
// Space:  O(N) to store the hash map and result.
console.log("Expected result: ", 8);
console.log(
  "Solution result: ",
  largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])
);
