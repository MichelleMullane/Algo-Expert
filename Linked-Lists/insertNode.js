// Create a linked list for testing:
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

// Solution 1:
const insertNode = (head, value, index) => {
  let insertedNode = new Node(value);

  if (index === 0) {
    insertedNode.next = head;
    return insertedNode;
  }

  let current = head;
  let currentIndex = 0;

  while (currentIndex < index) {
    if (currentIndex === index - 1) {
      insertedNode.next = current.next;
      current.next = insertedNode;
    }

    current = current.next;
    currentIndex++;
  }

  return head;
};
// Time Complexity: O(N) to iterate through a linked list of N nodes
// Space Complexity: O(1) to save a constant number of variables
console.log("Expected result: a -> b -> x -> c -> d");
console.log("Test resolt: ", insertNode(a, "x", 2));
