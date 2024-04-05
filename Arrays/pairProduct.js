const pairProduct = (numbers, targetProduct) => {
  //iterate through the numbers array
  //create a hash map of the visited values
  //calculate the value needed for the target product with the current numbers
  //if the value exists in the hash map, return the indices

  let previous = {};

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let multiplier = targetProduct / current;

    if (multiplier in previous) {
      return [previous[multiplier], i];
    }

    previous[current] = i;
  }
};
//Time: O(N) to iterate through the numbers array of length N values
//Space: O(N) to create a hash map whose length depends on the numbers array of N values
console.log("Expected result: ", [1, 3]);
console.log("Test result: ", pairProduct([3, 2, 5, 4, 1], 8));
