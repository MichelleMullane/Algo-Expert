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

// Solution 1:
const treeSum = (root) => {
  if (root === null) return 0;

  let stack = [root];
  let total = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    total += current.val;

    if (current.right != null) stack.push(current.right);
    if (current.left != null) stack.push(current.left);
  }

  return total;
};
// Time Complexity: O(N) to traverse a tree of N nodes
// Space Complexity: O(N) to create the stack of N nodes
console.log("Expected result: ", 21);
console.log("Test result: ", treeSum(a));
