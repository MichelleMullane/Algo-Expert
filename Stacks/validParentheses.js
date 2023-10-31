// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Solution 1: This solution utilizes a stack implemented as a dynamic array.
var isValid1 = function (s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (map[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  return stack.length === 0;
};
// Time complexity is O(n) to iterate through the s string of n values.
// Space complexity is O(m) to create the map and the stack array of m values.
console.log("Expected result: ", true);
console.log("Solution 1 result: ", isValid1("()[]{}"));