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

// Solution 1: depth-first recursive
const allTreePaths = (root) => {
  const response = allTreePathsHelper(root);
  for (path of response) {
    path.reverse();
  }
  return response;
};

const allTreePathsHelper = (root) => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]];

  let leftPaths = allTreePathsHelper(root.left);
  let rightPaths = allTreePathsHelper(root.right);

  let allPaths = [];
  for (path of leftPaths) {
    path.push(root.val);
    allPaths.push(path);
  }

  for (path of rightPaths) {
    path.push(root.val);
    allPaths.push(path);
  }

  return allPaths;
};
// Time complexity: O(Nlog(N)) depending on the structure of the input binary tree (a balanced tree has the worst complexity)
// Space complexity: O(Nlog(N)) to add that number of calls to the callstack and create the response array, dependent on the structure of the input binary tree
console.log("Expected result: ", [
  ["a", "b", "d"],
  ["a", "b", "e"],
  ["a", "c", "f"],
]);
console.log("Test result: ", allTreePaths(a));
