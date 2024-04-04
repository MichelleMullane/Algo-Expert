const mostFrequentChar = (s) => {
  // make a hash map that stores a count of each character in the input string
  // also store the max number of occurrences of a character
  // iterate through the map and return the char with the same number of occurrences as the max

  let count = {};
  let maxOccurences = 0;

  for (let char of s) {
    count[char] = count[char] + 1 || 1;
    maxOccurences = Math.max(maxOccurences, count[char]); //3
  }

  for (let key in count) {
    if (count[key] === maxOccurences) return key;
  }
};
//Time: O(N) to iterate through a string of N characters twice (O(2N simplifies to O(N)))
//Space: O(N) to store the count map whose length depends on the input string of N characters
console.log("Expected resul: e");
console.log("Test result: ", mostFrequentChar("bookeeper"));
