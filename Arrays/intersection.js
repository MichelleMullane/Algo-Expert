const intersection = (a, b) => {
  // create a set of the elements in a
  // loop through b and check if the current element exists in the set
  // if it does, then push to a response array
  // return response array

  const aValues = new Set(a);
  let response = [];

  for (let i = 0; i < b.length; i++) {
    if (aValues.has(b[i])) {
      response.push(b[i]);
    }
  }

  return response;
};
//Time: O(N+M) to create a set of N values and loop through an array of M values
//Space: O(N) to create the set of N values.  The response array is smaller than the smallest of the input arrays.
console.log("Expected result: ", [2, 6]);
console.log(
  "Test result (order of the values in the response array doesn't matter): ",
  intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])
);
