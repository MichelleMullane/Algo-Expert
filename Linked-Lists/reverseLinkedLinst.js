// 206.  Reverse Linked List

// Approach:
// define current and previous pointers, starting at the head and null, respectively
// traverse the linked list
// save the next value (because it will be overwritten later)
// point the current node to the previous node (or null if the new tail)
// point the previous pointer to the current node
// point the current pointer to the next node (saved earlier)
// return the previous pointer (new head)

var reverseList = function (head) {
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
