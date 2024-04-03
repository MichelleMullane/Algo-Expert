const anagrams = (s1, s2) => {
  //create hash maps for each string
  //compare the maps and return true if exactly the same, otherwise false
  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s1.length; i++) {
    map1[s1[i]] = map1[s1[i]] + 1 || 1;
  }

  for (let j = 0; j < s2.length; j++) {
    map2[s2[j]] = map2[s2[j]] + 1 || 1;
  }

  for (let key1 in map1) {
    if (map1[key1] != map2[key1]) return false;
  }

  for (let key2 in map2) {
    if (map1[key2] != map2[key2]) return false;
  }

  return true;
};
//Time: O(N+M) to loop through the two strings of lengths N and M
//Space: O(N+M) to store the variables of lengths N and M based on the input strings
console.log("Expected result: ", true);
console.log("Test result: ", anagrams("restful", "fluster"));
console.log("Expected result: ", false);
console.log("Test result: ", anagrams("cats", "tocs"));

//Solution 2 is slightly more optimized even though Big O notation simplifies to the same as solution 1.
//The only difference is we create one map for the count of characters in string 1 and don't need to loop through the second map twice.
const anagrams2 = (s1, s2) => {
  //create a count map based on string 1
  //decrement count based on string 2
  //if any values are >0 in count, return false
  //if any characters exist in string 2 that are not in string 1, return false
  let count = {};

  for (let char of s1) {
    count[char] = count[char] + 1 || 1;
  }

  for (let char2 of s2) {
    if (count[char2] === undefined) {
      return false;
    } else {
      count[char2] -= 1;
    }
  }

  for (let key in count) {
    if (count[key] != 0) return false;
  }

  return true;
};
console.log("Expected result: ", true);
console.log("Test result: ", anagrams2("restful", "fluster"));
console.log("Expected result: ", false);
console.log("Test result: ", anagrams2("cats", "tocs"));
