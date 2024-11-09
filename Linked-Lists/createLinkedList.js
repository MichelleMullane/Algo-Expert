class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Solution 1:
const createLinkedList = (values) => {
  const head = new Node(null);
  let current = head;

  for (let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = current.next;
  }

  return head.next;
};
// Time complexity: O(N) to iterate through N values in the input array
// Space complexity: O(N) to create a linked list containing N values
console.log("Expected result: 1 -> 7 -> 1 -> 8");
console.log("Test resule: ", createLinkedList([1, 7, 1, 8]));
