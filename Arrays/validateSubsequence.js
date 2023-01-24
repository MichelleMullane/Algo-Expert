// Validate Subsequence

// Solution 1:  Pointers solution in a while loop

// Approach:
// have pointer to traverse array & separate pointer to traverse sequence
// set current value to first value of sequence
// check for value in array
// if value exists in array, then iterate the sequence pointer & array pointers
// if not, iterate array pointer
// if you reach the end of the sequence, then return true, else return false

function isValidSubsequence1(array, sequence) {
  let arrP = 0,
    seqP = 0;

  while (arrP < array.length) {
    let curr = sequence[seqP];
    if (array[arrP] === curr) {
      seqP++;
    }
    arrP++;
  }
  return seqP === sequence.length;
}

console.log(
  "Solution 1: ",
  isValidSubsequence1([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);
// Time:  O(N) linear time to traverse N values in the input array.
// Space:  O(1) constant time to create the pointer variables.  Technically O(2).

// Solution 2:  Solution 1 refactored as a for loop
function isValidSubsequence2(array, sequence) {
  // Write your code here.
  let seqP = 0;

  for (let i = 0; i < array.length; i++) {
    let curr = sequence[seqP];
    if (array[i] === curr) {
      seqP++;
    }
  }
  return seqP === sequence.length;
}
console.log(
  "Solution 2: ",
  isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);
