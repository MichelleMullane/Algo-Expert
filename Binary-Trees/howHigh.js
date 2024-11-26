class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Solution 1: Recursive (depth-first)
const howHigh = (node) => {
  if (node === null) return -1;

  let leftEdgeCount = howHigh(node.left);
  let rightEdgeCount = howHigh(node.right);

  return 1 + Math.max(leftEdgeCount, rightEdgeCount);
};
// Time complexity: O(N) to call the function N times recursively based on the number of nodes in the input binary tree
// Space complexity: O(N) to add N calls to the callstack
console.log("Expected result: ", 2);
console.log("Test result: ", howHigh(a));
