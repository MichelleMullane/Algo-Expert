// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Solution 1: Implement a hash map to loop through the strs array to track and group the anagrams, then return the result with Object.values.
var groupAnagrams1 = function (strs) {
  // initiate a hash map where key will be the sorted letters of the current word and the values will be an array containing the word from strs
  let result = {};

  // loop through the strs array
  for (let i = 0; i < strs.length; i++) {
    // sort the current word
    let currentSorted = strs[i].split("").sort().join("");

    // if the sorted word appears in the map, then push the str into the array
    // else, add a new key to the hash map and push the str into a new array
    if (result[currentSorted]) {
      result[currentSorted].push(strs[i]);
    } else {
      result[currentSorted] = [strs[i]];
    }
  }

  // return the result
  return Object.values(result);
};
// Time complexity of this solution is O(m*nlog(n)) to loop through the strs array of m values and sort a string of n values.
console.log("Expected result (can be in any order): ", [
  ["bat"],
  ["nat", "tan"],
  ["ate", "eat", "tea"],
]);
console.log(
  "Solution 1 result: ",
  groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"])
);

// Solution 2:  Implement a hash map with a "map" of utf-8 encoding for each character in the string as the key
var groupAnagrams2 = function (strs) {
  let result = {};

  for (let str of strs) {
    let count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt() - "a".charCodeAt(0)]++;
    }

    let key = count.join("#");

    if (result[key]) {
      result[key].push(str);
    } else {
      result[key] = [str];
    }
  }
  return Object.values(result);
};
// Time complexity is slightly better without sorting.  O(n*m) for iterating through the strs array of n characters.
console.log(
  "Solution 2 result: ",
  groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])
);