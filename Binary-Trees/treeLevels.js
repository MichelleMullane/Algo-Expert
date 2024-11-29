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

// Solution 1: Depth-first iterative
const treeLevels = (root) => {
  if (root === null) return [];
  let nodeLevel = { node: root, level: 0 };
  let stack = [nodeLevel];
  let levels = [];

  while (stack.length > 0) {
    let current = stack.pop();

    if (levels[current.level]) {
      levels[current.level].push(current.node.val);
    } else {
      levels.push([current.node.val]);
    }

    if (current.node.right != null) {
      stack.push({ node: current.node.right, level: current.level + 1 });
    }

    if (current.node.left != null) {
      stack.push({ node: current.node.left, level: current.level + 1 });
    }
  }

  return levels;
};
// Time complexity: O(N) to iterate through N nodes of the input binary tree with linear operations
// Space complexity: O(N) to create the levels and stack arrays of N nodes based on the size of the input binary tree
console.log("Expected result: ", [["a"], ["b", "c"], ["d", "e", "f"]]);
console.log("Test result: ", treeLevels(a));
