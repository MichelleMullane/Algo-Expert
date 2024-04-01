const uncompress = (s) => {
  // assign two pointers to index 0
  // initiate response as an empty string
  // move right pointer if pointing to a numeric value
  // if right pointer points to a letter, slice the string from the left pointer to the right pointer's position
  // add the character at the right pointer to the response string the number of times of the sliced value
  // return the response

  let response = "";
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (parseInt(s[right])) {
      continue;
    } else {
      let num = s.slice(left, right);
      let count = 0;

      while (count < num) {
        response += s[right];
        count++;
      }
      right++;
      left = right;
    }
  }
  return response;
};

console.log("Expected result: ccaaat");
console.log("Test result: ", uncompress("2c3a1t"));
