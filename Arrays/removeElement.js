// 27. Remove Element

// Approach:
// set counter k equal to 0
// traverse array, if current value !== val, replace nums[k] with current value
// iterate k counter
// return k

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

console.log("Expected result: ", 5);
console.log("Output: ", removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
