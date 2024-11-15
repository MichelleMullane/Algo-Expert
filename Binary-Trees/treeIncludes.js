// Create a binary tree for testing:
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Solution 1:
const treeIncludes = (root, target) => {
  if (root === null) return false;

  let stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) return true;

    if (current.right != null) stack.push(current.right);
    if (current.left != null) stack.push(current.left);
  }

  return false;
};
// Time complexity: O(N) to visit N nodes of the binary tree
// Space complexity: O(N) to create a stack of N nodes
console.log("Expected result: ", true);
console.log("Test result: ", treeIncludes(a, "e"));
