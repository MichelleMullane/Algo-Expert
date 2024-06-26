class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const printLinkedListValue = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
};
// printLinkedListValue(a);

const printLinkedListValueRecursive = (head) => {
  if (head === null) return;

  console.log(head.value);
  printLinkedListValueRecursive(head.next);
};

printLinkedListValueRecursive(a);
