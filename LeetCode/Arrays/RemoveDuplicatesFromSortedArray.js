// 26. Remove Duplicates from Sorted Array

// Approach:
// find a unique element, move it to the front of the array in non-decreasing order
// create variable k to store a count of the number of unique elements
// create a variable to store the current value
// create a set to keep track of the unique values
// traverse the array and update k if we encounter a unique value
// if unique, move the element to the correct position to the right of the previous unique value
// update the current value
// return k

var removeDuplicates1 = function (nums) {
  let seen = new Set(),
    k = 1,
    current = nums[0];
  seen.add(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (!seen.has(nums[i])) {
      seen.add(nums[i]);

      let temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;

      current = nums[k];
      k++;
    }
  }
  return k;
};
console.log("Expected result", 5);
console.log(
  "Output solution 1: ",
  removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
);

// Approach:
// start left and right pointers at index 1
// use left pointer to track the index of the last unique value
// use right pointer to traverse through the nums array
// check if value at the right pointer is different from value to the left
// if unique, move the value at the right pointer to the value at the left pointer, and iterate left pointer
// return left

var removeDuplicates2 = function (nums) {
  let left = 1;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};
console.log("Expected result", 5);
console.log(
  "Output solution 2: ",
  removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
);
