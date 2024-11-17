// Create a binary tree for testing:
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Solution 1: depth-first search:
const treeMinValue = (root) => {
  let stack = [root];
  let minValue = Infinity;

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val < minValue) minValue = current.val;
    if (current.right != null) stack.push(current.right);
    if (current.left != null) stack.push(current.left);
  }

  return minValue;
};
// Time complexity: O(N) to visit N nodes of the input binary tree
// Space complexity: O(N) to make a stack of N nodes based on the input length of the binary tree
console.log("Expected result: ", -2);
console.log("Test result: ", treeMinValue(a));

// Solution 2: breadth-first search
const treeMinValue2 = (root) => {
  let queue = [root];
  let minValue = Infinity;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val < minValue) minValue = current.val;
    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }

  return minValue;
};
// Time complexity: O(N^2) to visit and perform shift on N nodes of the input binary tree
// Space complexity: O(N) to make a stack of N nodes based on the input length of the binary tree
console.log("Expected result: ", -2);
console.log("Test result: ", treeMinValue2(a));
