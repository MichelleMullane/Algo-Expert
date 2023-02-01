// Branch Sums
// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

// First, create a binary tree for testing the solution:
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.left.right.left = new BinaryTree(10);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

// Approach:
// 1. Pass a running sum and an empty list array to the function
// 2. Update the current sum
// 3. Iterate through the BT, depth-first
// 4. Push branch sum to the answer array when the leaf is reached
// 5. Return the answer array
function branchSums(root, runningSum = 0, list = []) {
  // Write your code here.
  let currentSum = runningSum + root.value;

  // Base case:  At a leaf node
  if (!root.left && !root.right) {
    list.push(currentSum);
  }

  // Recursive cases:
  if (root.left) {
    branchSums(root.left, currentSum, list);
  }
  if (root.right) {
    branchSums(root.right, currentSum, list);
  }

  return list;
}
// Time: O(N) to iterate through N nodes of the BT
// Space: O(N) to store ~N/2 leaf nodes
console.log("Expected result: ", [15, 16, 18, 10, 11]);
console.log("Solution result: ", branchSums(root));
