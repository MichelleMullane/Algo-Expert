// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Solution 1:  This is a brute force solution with O(N^2) time complexity.
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
console.log("Expected result: ", [0, 1]);
console.log("twoSum1 result: ", twoSum1([2, 7, 11, 15], 9));

//Solution 2: This solution has O(N) time complexity, using a hash map to track previously iterated values.
var twoSum2 = function (nums, target) {
  let numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numsMap[diff] !== undefined) {
      return [numsMap[diff], i];
    } else {
      numsMap[nums[i]] = i;
    }
  }
};
console.log("twoSum2 result: ", twoSum2([2, 7, 11, 15], 9));
