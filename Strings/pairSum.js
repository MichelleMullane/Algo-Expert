const pairSum = (numbers, targetSum) => {
  // iterate through numbers starting at index 0
  // calculate target sum minus the current value
  // iterate through the rest of the array to see if the difference exists
  // return the indices once found
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let difference = targetSum - current;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === difference) return [i, j];
    }
  }
};
//Time: O(N^2) for iterate through nested loops to iterate through the numbers of array of length N
//Space: O(1) since we aren't storing any values
console.log("Expected result: ", [0, 2]);
console.log("Test result: ", pairSum([3, 2, 5, 4, 1], 8));

const pairSum2 = (numbers, targetSum) => {
  //loop through array numbers
  //create a hash map storing the numbers already seen with the index as the value
  //calculate difference between the target sum and the current value
  //if the difference exists in the previous map, then return the indices

  let previous = {};

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let difference = targetSum - current;

    if (difference in previous) {
      return [previous[difference], i];
    }

    previous[current] = i;
  }
};
//Time: O(N) to iterate through the numbers array of length N
//Space: O(N) to store the hash map whose length depends of the array numbers of length N
console.log("Expected result: ", [0, 2]);
console.log("Test result: ", pairSum2([3, 2, 5, 4, 1], 8));
