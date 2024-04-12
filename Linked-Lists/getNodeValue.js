// Initiate a linked list for testing:
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const getNodeValue = (head, index) => {
  // loop through a linked list, tracking the index with a count variable
  // if a node exists at the index, return the value
  // otherwise return null
  let count = 0;
  let current = head;

  while (current != null) {
    if (count === index) return current.val;
    count++;
    current = current.next;
  }
  return null;
};
// Time: O(N) to traverse a list with length N nodes
// Space: O(1) for setting variables with constant length
console.log("Expected result: c");
console.log("getNodeValue Test result: ", getNodeValue(a, 2));

// Recursive solution 1:
const findValue = (head, index, count) => {
  if (head === null) return null;
  if (count === index) return head.val;
  count += 1;
  return findValue(head.next, index, count);
};

const getNodeValueRecursive1 = (head, index) => {
  let count = 0;

  return findValue(head, index, count);
};
// Time: O(N) to make N recursive calls for a list of N nodes
// Space: O(N) for adding N calls to the call stack
console.log(
  "getNodeValueRecursive1 Test result: ",
  getNodeValueRecursive1(a, 2)
);

// Recursive solution 2:
const getNodeValueRecursive2 = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;

  return getNodeValueRecursive2(head.next, --index);
};
// Time: O(N) to make N recursive calls for a list of N nodes
// Space: O(N) for adding N calls to the call stack
console.log(
  "getNodeValueRecursive2 Test result: ",
  getNodeValueRecursive2(a, 2)
);
