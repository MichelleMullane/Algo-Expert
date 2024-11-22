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
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  const rightPath = pathFinder(root.right, target);

  if (leftPath != null) {
    return [root.val, ...leftPath];
  }

  if (rightPath != null) {
    return [root.val, ...rightPath];
  }

  return null;
};
// Time Complexity: O(N^2) to call the function recursively N times based on the number of nodes in the input binary tree and to make copies of N arrays with the spread operator.
// Space Complexity: O(N) to add N calls to the callstack on the number of nodes in the input tree.
console.log("Expected result: ", ["a", "b", "e"]);
console.log("Test result: ", pathFinder(a, "e"));

// Solution 2: Optimized
const pathFinder2 = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result === null) {
    return null;
  } else {
    return result.reverse();
  }
};

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);
  const rightPath = pathFinderHelper(root.right, target);

  if (leftPath != null) {
    leftPath.push(root.val);
    return leftPath;
  }

  if (rightPath != null) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};
// Time Complexity: O(N) to call the function recursively N times based on the number of nodes in the input binary tree.
// Space Complexity: O(N) to add N calls to the callstack on the number of nodes in the input tree.
console.log("Expected result: ", ["a", "b", "e"]);
console.log("Test result: ", pathFinder2(a, "e"));
