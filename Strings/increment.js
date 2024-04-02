// Given a version number of the form ‘x.y.z’
// When the increment function is called with no index
// Then farthest right version number is incremented

// Given a version number of the form ‘x.y.z’
// When the increment function is called with an index specifying which place to increment
// Then the appropriate version number is incremented
// And all versions to the right of index are reset to 0

// Examples:
// increment(“1.1.1”, 2) => “1.2.0”
// increment(“1.5.17”, 1) => “2.0.0”
// increment(“2.1.0”) => “2.1.1”
// increment(“2.1.0”, 3) => “2.1.1”

// Approach:
// Set a default index to the third version number.
// Convert to 0-based index for easier handling of a JavaScript array.
// Split the version string into an array of string numbers.
// Convert the version number at the specified index.
// If there are any remaining numbers to the right, then change them to 0.
// Join the values with a "." and return.

const increment = (version, index = 3) => {
  let ind = index - 1; // Convert to 0 index
  let nums = version.split("."); // Split into an array of strings
  nums[ind] = ++nums[ind] + ""; // Increment the appropriate version num & convert to string

  // Reset any remaining version numbers to the right to a `0`
  while (ind < 2) {
    ind++;
    nums[ind] = `0`;
  }
  return nums.join("."); // Return in the form 'x.y.z'
};

// Notes:
// Time complexity of the above solution is O(N).  The methods split and join are O(string length x delimiter length) so O(N) for this problem.  With split and join and the while loop, it would be O(3N) but we can simplify this to O(N).
// Space complexity is O(N) to create the nums array.
// The above code works for an input with the given format 'x.y.z'.  If the input were to be of varying length or much longer, then another solution might be better to optimize space and time.

// Checks on the input parameters could include:
// 1. The version number is a string of numbers and decimals.
// 2. The version number is the correct format with 3 numbers and 2 decimals.
// 3. The index is a valid index (an integer from 1-3).

// A test plan could include:
// The function increment should...
// ...return a string.
// ...iterates the correct index, if an index is provided.
// ...iterates the version number furthest to the right if no index is provided.
// ...resets the version numbers to the right of an incremented version number.

console.log("Expected: “1.2.0”", "Result: ", increment(`1.1.1`, 2));
console.log("Expected: “2.0.0”", "Result: ", increment(`1.5.17`, 1));
console.log("Expected: “2.1.1”", "Result: ", increment(`2.1.0`));
console.log("Expected: “2.1.1”", "Result: ", increment(`2.1.0`, 3));
