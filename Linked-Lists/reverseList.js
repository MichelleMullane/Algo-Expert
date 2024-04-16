class Node {
  constructor(value) {
    this.next = null;
    this.val = value;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reverseList = (head) => {
  // save the first node as the previous node
  // set the current node to the first node's next node
  // iterate through a list
  // save the next node in the list
  // set the current node's next to the saved previous node
  // set the previous variable to the current node
  let previous = null;
  let current = head;
  let next = head.next;

  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
//Time: O(N) to iterate through a list of N nodes
//Space: O(1) for a fixed amount of declared variables
console.log("Expected result: head of reversed list value is e");
console.log("Test result: ", reverseList(a));

//Reset the list
reverseList(e);

const reverseListRecursive = (head, previous = null) => {
  if (head === null) return previous;

  let next = head.next;
  head.next = previous;

  return reverseListRecursive(next, head);
};
//Time: O(N) to iterate through a list of N nodes
//Space: O(N) to have N calls on the call stack
console.log("Expected result: head of reversed list value is e");
console.log("Test result: ", reverseListRecursive(a));
