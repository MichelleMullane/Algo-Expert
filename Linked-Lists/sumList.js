// Initialize linked list for testing:
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const sumList = (head) => {
  // iterate through the list and add each value to a variable sum
  // return the sum

  let total = 0;
  let current = head;

  while (current != null) {
    total += current.val;
    current = current.next;
  }

  return total;
};
//Time: O(N) to iterate through a list of N values
//Space: O(1) since no variables depend on the length of the list argument
console.log("Expected result: ", 19);
console.log("Test result: ", sumList(a));

const sumListRecursive = (head) => {
  if (head === null) return 0;

  return (head.val += sumListRecursive(head.next));
};
//Time: O(N) to recursively call a list o N values
//Space: O(N) to add the calls to the call stack for N values
console.log("Expected result: ", 19);
console.log("Test result: ", sumListRecursive(a));
