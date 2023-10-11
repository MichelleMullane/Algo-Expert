// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram1 = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let sSorted = s.split("").sort();
  let tSorted = t.split("").sort();

  for (let i = 0; i < sSorted.length; i++) {
    if (tSorted[i] != sSorted[i]) {
      return false;
    }
  }

  return true;
};

console.log("Correct result: true");
console.log("Solution 1 result: ", isAnagram1("anagram", "nagaram"));

var isAnagram2 = function (s, t) {
  // if different lengths, they cannot be anagrams
  if (s.length != t.length) {
    return false;
  }
  // create hash maps for each string
  let sMap = {};
  let tMap = {};

  // iterate and fill the maps with the counts of each letter
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = 1 + (sMap[s[i]] || 0);
    tMap[t[i]] = 1 + (tMap[t[i]] || 0);
  }

  // iterate through the maps and compare the counts
  for (const letter in sMap) {
    if (sMap[letter] != tMap[letter]) return false;
  }

  return true;
};
console.log("Correct result: true");
console.log("Solution 2 result: ", isAnagram2("anagram", "nagaram"));

var isAnagram3 = function (s, t) {
  return s.split("").sort().join() === t.split("").sort().join();
};
console.log("Correct result: true");
console.log("Solution 3 result: ", isAnagram3("anagram", "nagaram"));
