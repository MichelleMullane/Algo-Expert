// 707. Design Linked List

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

var MyLinkedList = function (val) {
  this.left = new ListNode(0);
  this.right = new ListNode(0);
  this.left.next = this.right;
  this.right.prev = this.left;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  current = this.left.next;
  while (current && index > 0) {
    current = current.next;
    index--;
  }
  if (current && current !== this.right && index === 0) {
    return current.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newHead = new ListNode(val);
  let oldHead = this.left.next;
  let leftDummy = this.left;

  leftDummy.next = newHead;
  oldHead.prev = newHead;
  newHead.next = oldHead;
  newHead.prev = leftDummy;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newTail = new ListNode(val);
  let rightDummy = this.right;
  let oldTail = this.right.prev;

  rightDummy.prev = newTail;
  oldTail.next = newTail;
  newTail.next = rightDummy;
  newTail.prev = oldTail;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let current = this.left.next;
  while (current && index > 0) {
    current = current.next;
    index--;
  }
  if (current && index === 0) {
    let newNode = new ListNode(val);
    let oldPrev = current.prev;

    oldPrev.next = newNode;
    current.prev = newNode;
    newNode.prev = oldPrev;
    newNode.next = current;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let current = this.left.next;
  while (current && index > 0) {
    current = current.next;
    index--;
  }
  if (current && current !== this.right && index === 0) {
    let nextNode = current.next;
    let prevNode = current.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
