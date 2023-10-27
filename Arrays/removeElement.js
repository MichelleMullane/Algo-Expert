// 27. Remove Element

// Approach:
// set counter k equal to 0
// traverse array, if current value !== val, replace nums[k] with current value
// iterate k counter
// return k

var removeElement1 = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
// This solution has O(n) time complexity to iterate through an array of n values.  This beats ~62% of leetcode users for runtime.
// This has O(1) memory as it changes the array in place, and I allocate counter variables.  This beats ~80% of leetcode users.
console.log("Expected result: ", 5);
console.log("Output: ", removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 2));


// Solution 2:
var removeElement2 = function (nums, val) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === val) {
      right++;
      continue;
    }

    if (nums[left] === val) {
      nums[left] = nums[right];
      nums[right] = val;
    }

    right++;
    left++;
  }
  return left;
};
// I revisited this problem after a few months.  Solution 2 has O(n) time complexity to iterate through an array of n values.  This beats ~98% of leetcode users, so it is slightly more time-efficient than Solution 1.
// This solution is O(1) constant time for memory to allocate 2 pointer variables.  This beats ~40% of leetcode users for memory, so not as memory-efficient as Solution 1.
console.log("Expected result: ", 5);
console.log("Output: ", removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2));