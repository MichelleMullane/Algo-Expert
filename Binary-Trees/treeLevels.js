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

// Solution 2: Breadth-first iterative
const treeLevels2 = (root) => {
  if (root === null) return [];

  let levels = [];
  let queue = [{ node: root, level: 0 }];

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (levels[level]) {
      levels[level].push(node.val);
    } else {
      levels.push([node.val]);
    }

    if (node.left != null) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right != null) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }

  return levels;
};
// Time complexity: O(N^2) to iterate through N nodes of the input binary tree and perform shift on each node
// Space complexity: O(N) to build the levels and queue arrays based on the length of the input binary tree N
console.log("Expected result: ", [["a"], ["b", "c"], ["d", "e", "f"]]);
console.log("Test result: ", treeLevels2(a));

// Solution 3: Recursive (depth-first)
const treeLevels3 = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  return levels;
};

const fillLevels = (root, levels, level) => {
  if (root === null) return [];

  if (levels[level]) {
    levels[level].push(root.val);
  } else {
    levels.push([root.val]);
  }

  fillLevels(root.left, levels, level + 1);
  fillLevels(root.right, levels, level + 1);
};
// Time complexity: O(N) to make N recursive calls based on the length of the input binary tree
// Space complexity: O(N) to add N calls to the callstack and create the levels return array
console.log("Expected result: ", [["a"], ["b", "c"], ["d", "e", "f"]]);
console.log("Test result: ", treeLevels3(a));
