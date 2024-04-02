const compress = (s) => {
  // initiate response as empty string
  // initiate a count variable at 0
  // iterate through string
  // if current char is the same as the previous one, increment count
  // if current char is different, then add count and the prev char to response & set count to 1
  // return response string

  let response = "";
  let left = 0;
  let right = 1;

  while (right <= s.length) {
    if (s[right] === s[left]) {
      right++;
    } else {
      if (right - left === 1) {
        response += s[left];
      } else {
        response += parseInt(right - left) + s[left];
      }

      left = right;
      right++;
    }
  }

  return response;
};

//Time: O(N) to iterate through the string of length N characters
//Space: O(N) to create the response array based on the input array of N characters

console.log("Expected result: 2c3at3s");
console.log("Test result: ", compress("ccaaatsss"));
