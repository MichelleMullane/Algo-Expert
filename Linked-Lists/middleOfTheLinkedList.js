// 876.  Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Solution:
// Approach:
// 1. Get the length of the LL by creating a count variable and traversing the LL
// 2. Calculate halfway point
// 3. Traverse the LL to the middle node or second middle node & return
var middleNode = function (head) {
  let count = 1;
  let current = head;

  while (current !== null) {
    current = current.next;
    count++;
  }

  let halfway = Math.round(count / 2);
  count = 1;
  current = head;

  while (current !== null) {
    if (count === halfway) {
      return current;
    }
    current = current.next;
    count++;
  }
};
// Time: O(N) to traverse the LL
// Space:  O(N) to set the current variable and the counter variable
