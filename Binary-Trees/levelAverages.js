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

// Solution 1: Depth-first iterative
const levelAverages = (root) => {
  if (root === null) return [];

  let stack = [{ node: root, level: 0 }];
  let values = [];

  while (stack.length > 0) {
    const { node, level } = stack.pop();

    if (values[level]) {
      values[level].push(node.val);
    } else {
      values.push([node.val]);
    }

    if (node.left != null) {
      stack.push({ node: node.left, level: level + 1 });
    }

    if (node.right != null) {
      stack.push({ node: node.right, level: level + 1 });
    }
  }

  let averages = [];

  for (const level of values) {
    let currentSum = 0;
    let count = 0;

    while (level.length > 0) {
      let currentVal = level.pop();
      currentSum += currentVal;
      count++;
    }

    averages.push(currentSum / count);
  }

  return averages;
};
// Time complexity: O(N + N) or O(N) to iterate through the input binary tree of N nodes
// Space complexity: O(N) to create the values and averages arrays based on the length of the binary tree
console.log("Expected result: ", [3, 7.5, 1]);
console.log("Test result: ", levelAverages(a));
