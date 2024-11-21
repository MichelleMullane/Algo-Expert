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
const d = new Node(5);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Recursive solution:
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.right)
  );
  return root.val + maxChildPathSum;
};
// Time complexity: O(N) to perform N recursive calls on N nodes of the input binary tree
// Space complexity: O(N) to add N recursive calls to the call stack based on the size of the input tree
console.log("Expected result: ", 19);
console.log("Test result: ", maxPathSum(a));
