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
const depthFirstValues = (root) => {
  let stack = [root];
  let values = [];

  while (stack.length > 0) {
    if (root === null) return [];

    const current = stack.pop();
    values.push(current.val);

    if (current.right != null) stack.push(current.right);
    if (current.left != null) stack.push(current.left);
  }

  return values;
};
// Time complexity: O(N) to traverse N nodes of the input tree
// Space complexity: O(N) to create a stack of N nodes based on the length of the input tree
console.log("Expected result: ", ["a", "b", "d", "e", "c", "f"]);
console.log("Test result: ", depthFirstValues(a));

// Solution 1: Recursive
const depthFirstValues2 = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValues2(root.left);
  const rightValues = depthFirstValues2(root.right);

  return [root.val, ...leftValues, ...rightValues];
};
// Time complexity: O(N) to call the function recursively based on the number of nodes in the input tree
// Space complexity: O(N) to create an array based on the number of nodes from the input tree
console.log("Expected result: ", ["a", "b", "d", "e", "c", "f"]);
console.log("Test result: ", depthFirstValues2(a));
