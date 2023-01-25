// Find Closest Value in BST

// First, create BST class to test the solutions code
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

// Solution 1:  Iterative Solution

// Approach:
// 1. Save current node in a variable
// 2. Create variable to store the 'closest' node, use the root as a start value
// 3. Calculate distance from the stored closest node & the current node from the target
// 4. Reassign the closest variable if the distance is smaller
// 5. Traverse the BST
// 6. Return the closest variable
function findClosestValueInBst1(tree, target) {
  // Write your code here.
  let current = tree;
  let closest = tree.value;

  while (current !== null) {
    if (Math.abs(target - closest) > Math.abs(target - current.value)) {
      closest = current.value;
    }

    if (target < current.value) {
      current = current.left;
    } else if (target > current.value) {
      current = current.right;
    } else {
      break;
    }
  }

  return closest;
}
console.log("Expected: 13");
console.log("Solution 1: ", findClosestValueInBst1(root, 12));
// Time:  O(log(N)) to traverse a BST.  N decreases by half with each step.
// Space: O(1) to create the variables.
