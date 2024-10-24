// Initiate a linked list for testing
class Node {
  constructor(val) {
    this.val = val;
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

// Solution 1: Iterative
const removeNode = (head, targetVal) => {
  if (head.val === targetVal) {
    return head.next;
  }

  let current = head;
  let previous = null;

  while (current != null) {
    if (current.val === targetVal) {
      previous.next = current.next;
      break;
    }

    previous = current;
    current = current.next;
  }

  return head;
};
// Time complexity: O(n) to iterate through n nodes of the linked list
// Space complexity: O(1) to save a constant number of variables
console.log("Expected result: a -> b -> d");
console.log("Test result solution 1: ", removeNode(a, "c"));

// Solution 2: Recursive
const removeNodeRecursive = (head, targetVal) => {
  if (head === null) return null;

  if (head.val === targetVal) return head.next;

  head.next = removeNodeRecursive(head.next, targetVal);

  return head;
};
// Time complexity: O(n) to run n calls through the callstack based on the number of nodes in the linked list.
// Space complexity: O(n) to add n calls to the callstack.
console.log("Expected result: a -> b -> d");
console.log("Test result solution 2: ", removeNodeRecursive(a, "c"));
