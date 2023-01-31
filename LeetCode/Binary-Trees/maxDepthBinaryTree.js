// Given the root of a binary tree, return its maximum depth.

// First, create BT class to test the solutions code
class BT {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BT(3);
root.left = new BT(9);
root.left.left = new BT(null);
root.left.right = new BT(null);
root.right = new BT(20);
root.right.left = new BT(15);
root.right.right = new BT(7);

// Solution: Recursive solution
// Approach:  Define the base case as the case where the node is null and return 0.  The recursive case finds the max of the right or left branches and iterates the depth tally.

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
};
// Time: O(N) to traverse N nodes of the binary tree
// Space: O(N) to run Math.max for N nodes of the binary tree: https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.max
console.log("Expected result: ", 3);
console.log("Solution: ", maxDepth(root));
