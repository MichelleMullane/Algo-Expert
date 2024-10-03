// Initiate linked list for testing:
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const u = new Node(2);
const v = new Node(2);
const w = new Node(3);
const x = new Node(3);
const y = new Node(2);
u.next = v;
v.next = w;
w.next = x;
x.next = y;

// Solution 1: Iteractive approach
const isUnivalueList1 = (head) => {
  let current = head.next;

  while (current != null) {
    if (current.val != head.val) {
      return false;
    }

    current = current.next;
  }

  return true;
};
// Time complexity: O(n) depending on the number of nodes in the input linked list.
// Space complexity: O(1) for one constant-sized variable
console.log("Expected result: ", false);
console.log("Test result: ", isUnivalueList1(u));

// Solution 2: Recursive approach
const isUnivalueList2 = (head, previous = head) => {
  // todo
  if (head === null) return true;
  if (previous.val != head.val) return false;

  return isUnivalueList2(head.next, head);
};
// Time complexity: O(n) depending on the number of nodes in the input linked list.
// Space complexity: O(n) for adding n calls to the call stack.
console.log("Expected result: ", false);
console.log("Test result: ", isUnivalueList2(u));
