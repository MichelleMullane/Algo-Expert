// 206.  Reverse Linked List

// Approach:
// define current and previous pointers, starting at the head and null, respectively
// traverse the linked list
// save the next value (because it will be overwritten later)
// point the current node to the previous node (or null if the new tail)
// point the previous pointer to the current node
// point the current pointer to the next node (saved earlier)
// return the previous pointer (new head)

var reverseList1 = function (head) {
  let current = head;
  let previous = null;

  while (current) {
    let nxt = current.next;
    current.next = previous;
    previous = current;
    current = nxt;
  }
  return previous;
};

// I revisited this problem after several months.  The solution is very similar to the one above.
var reverseList2 = function (head) {
  let newNext = null;
  let current = head;

  while (current) {
    let oldNext = current.next;
    current.next = newNext;
    newNext = current;
    current = oldNext;
  }

  return newNext;
};
// Time complexity is O(n) to traverse a list of n nodes.
// Space complexity if O(1) to store the pointer variables.
