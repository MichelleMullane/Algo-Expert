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

const linkedListFind = (head, target) => {
  // iterate through the list and return true if the current value = target
  // if the current value is null, return false

  let current = head;

  while (current != null) {
    if (current.val === target) return true;

    current = current.next;
  }
  return false;
};
//Time: O(N) to iterate through the linked list of N values
//Space: O(1) since we don't need to store anything based on the length of the argument list
console.log("Expected result: ", true);
console.log("Test result: ", linkedListFind(a, "c"));

const linkedListFindRecursive = (head, target) => {
  if (head === null) return false;

  if (head.val === target) return true;
  return linkedListFindRecursive(head.next, target);
};
//Time: O(N) to make N recursive calls for the list of length N values
//Space: O(N) to add N call to the call stack
console.log("Expected result: ", true);
console.log("Test result: ", linkedListFindRecursive(a, "c"));
