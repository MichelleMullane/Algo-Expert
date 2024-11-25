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

// Solutuion 1: Recursive (depth-first search)
const treeValueCount = (root, target) => {
  if (root === null) return 0;

  let count = 0;
  if (root.val === target) count++;

  let leftCount = treeValueCount(root.left, target);
  let rightCount = treeValueCount(root.right, target);

  return leftCount + count + rightCount;
};
// Time complexity: O(N) to execute N recursive calls based on the number N nodes of the input binary tree
// Space complexity: O(N) to add N recursive calls to the callstack
console.log("Expected result: ", 3);
console.log("Test result: ", treeValueCount(a, 6));

// Solution 2: Breadth-first search (iterative)
const treeValueCount2 = (root, target) => {
  if (root === null) return 0;

  let count = 0;
  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();

    if (current.val === target) count++;

    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }

  return count;
};
// Time complexity: O(N^2) to iterate through N nodes of the input binary tree and perform shift on N nodes
// Space complexity: O(N) to create an array of N nodes
console.log("Expected result: ", 3);
console.log("Test result: ", treeValueCount2(a, 6));
