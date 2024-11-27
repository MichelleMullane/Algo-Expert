class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Solution 1: breadth-first traversal
const bottomRightValue = (root) => {
  let queue = [root];
  let current;

  while (queue.length > 0) {
    current = queue.shift();

    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }

  return current.val;
};
// Time complexity: O(N^2) to add each value to a queue and perform shift on each node
// Space complexity: O(N) to store a queue of N nodes
console.log("Expected result: ", 1);
console.log("Test result: ", bottomRightValue(a));
