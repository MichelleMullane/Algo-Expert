// Create a linked list for testing:
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const longestStreak = (head) => {
  let currentStreak = 0;
  let maxStreak = 0;
  let current = head;
  let previousValue = null;

  while (current != null) {
    if (current.val != previousValue) {
      currentStreak = 1;
    } else {
      currentStreak++;
    }

    maxStreak = Math.max(currentStreak, maxStreak);
    previousValue = current.val;
    current = current.next;
  }

  return maxStreak;
};
// Time Complexity: O(N) with N being the number of nodes in the linked list.
// Space Complexity: O(1) for variables with constant space.
console.log("Expected result: 3");
console.log("Test result: ", longestStreak(a));
