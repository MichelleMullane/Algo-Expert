const fiveSort = (nums) => {
  //set left (index 0) and right (end of array) pointers
  //loop through array until left = right
  //if left pointer value is a 5, then swap with right pointer value (if right pointer value is a 5, reduce right until the value is not 5)
  //return array at the end

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] === 5) {
      while (nums[right] === 5) right--;

      if (right === 0) return nums;
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    left++;
  }

  return nums;
};
//Time: O(N) to loop through an array of N values one time.
//Space: O(1) since I am modifying the existing array in place.
console.log(
  "Expected result is all fives in the array should occur at the end of the array."
);
console.log("Test result: ", fiveSort([12, 5, 1, 5, 12, 7]));
console.log("Test result: ", fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
