class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create two listed lists for testing:
const a1 = new Node(9);
const a2 = new Node(9);
const a3 = new Node(9);
a1.next = a2;
a2.next = a3;

const b1 = new Node(6);

// Solution 1:
const addLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  let currentSum = 0;
  const newHead = new Node(null);
  let tail = newHead;

  while (current1 != null || current2 != null) {
    let value1 = current1 === null ? 0 : current1.val;
    let value2 = current2 === null ? 0 : current2.val; //0
    currentSum = currentSum + value1 + value2; // 10

    if (currentSum >= 10) {
      newNode = new Node(currentSum - 10);
      currentSum = 1;
    } else {
      newNode = new Node(currentSum);
      currentSum = 0;
    }

    tail.next = newNode;
    tail = tail.next;

    if (current1) {
      current1 = current1.next;
    }

    if (current2) {
      current2 = current2.next;
    }
  }

  if (currentSum > 0) {
    newNode = new Node(1);
    tail.next = newNode;
  }

  return newHead.next;
};
// Time complexity: O(N) to traverse the length of the longest list of N nodes
// Space complexity: O(N) to create a linked list of N nodes based on the size of the input lists
console.log("Expected result: 5 -> 0 -> 0 -> 1");
console.log("Test resule: ", addLists(a1, b1));
