//Create a linked list to test the solutions:
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

a.next = b;
b.next = c;
c.next = d;

const linkedListValues = (head) => {
  // iterate through linked list with a loop
  // push each value to a response array
  // return the array

  const values = [];
  let current = head;

  while (current != null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};
//Time: O(N) to loop through a linked list of size N
//Space: O(N) to create the response array of size N
console.log("Expected result: ", ["a", "b", "c", "d"]);
console.log("Test result: ", linkedListValues(a));

const linkedListValuesRecursive = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};
//Time: O(N) to recursively call each element of a linked list of size N
//Space: O(N) to create the response array of size N
console.log("Expected result: ", ["a", "b", "c", "d"]);
console.log("Test result: ", linkedListValuesRecursive(a));
