// Approach:
// create a new list
// check for the smallest value out of list1 and list2 & add the smallest as the next value in the new list
// if there are remaining values in either list, then add them to the new list
// return the new list

var mergeTwoLists1 = function (list1, list2) {
  let merged = (tail = new ListNode());

  while (list1 && list2) {
    // [2,4] [1,3,4]
    if (list1.val <= list2.val) {
      //
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2; // head = [1]
      list2 = list2.next;
    }
    tail = tail.next; // null
  }

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return merged.next;
};

// I revisited this problem after several months.  The solution is very similiar to that above.
var mergeTwoLists2 = function (list1, list2) {
  let node = new ListNode();
  let merged = node;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = list1;
      list1 = list1.next;
    } else {
      merged.next = list2;
      list2 = list2.next;
    }
    merged = merged.next;
  }

  if (list1) {
    merged.next = list1;
  }

  if (list2) {
    merged.next = list2;
  }

  return node.next;
};
// Time complexity of O(n) to iterate through the linked list of n nodes.
// Space complexity of O(1) for the dummy node.