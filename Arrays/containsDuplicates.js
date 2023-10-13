//  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Solution 1:  This solution uses a hash map with an O(logN) runtime.
var containsDuplicate1 = function (nums) {
  // iterate through nums, adding each value to a hash map
  // if a value already exists in the map, then return false
  // if we finish iterating the array, then return true

  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]] !== undefined) {
      return true;
    } else {
      seen[nums[i]] = 1;
    }
  }

  return false;
};
console.log("Expected result: ", true);
console.log("containsDuplicate1 result: ", containsDuplicate1([1, 2, 3, 1]));
