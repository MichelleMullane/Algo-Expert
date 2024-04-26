class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;

const mergeLists1 = (head1, head2) => {
  // set tail variable to track the current value of the merged list
  // compare the values of the first node of each list and set the tail to the list with the lower value
  // iterate through the lists, while both are not null
  // tack on any remaining nodes from either list at the end
  // return the head of the list with the smallest value
  let firstNode = null;
  let current1 = head1;
  let current2 = head2;

  if (head1.val < head2.val) {
    firstNode = head1;
    current1 = head1.next;
  } else {
    firstNode = head2;
    current2 = head2.next;
  }

  let tail = firstNode;

  while (current1 != null && current2 != null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }

    tail = tail.next;
  }

  if (current1 != null) tail.next = current1;
  if (current2 != null) tail.next = current2;

  return firstNode;
};
// Time: O(min(N,M)) to iterate through the shortest of lists of length N or M
// Space: O(1) for constant variable space
// Display test result:
console.log("Expected result: 5 6 7 8 9 10 12 20 25 28 ");
let result1 = mergeLists1(a, q);

const displayTestResult = (answer) => {
  let current = answer;
  let displayResult = [];
  while (current != null) {
    displayResult.push(current.val);
    current = current.next;
  }
  console.log(displayResult.join(" "));
};
displayTestResult(result1);

const mergeListsRecursive = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeListsRecursive(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeListsRecursive(head1, next2);
    return head2;
  }
};
// Time: O(min(N,M)) to iterate through the shortest of lists of length N or M
// Space: O(min(N, M)) to add calls to the callstack
// Reset test lists:
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = null;

q.next = r;
r.next = s;
s.next = t;
t.next = null;
const result2 = mergeListsRecursive(a, q);
displayTestResult(result2);

const mergeLists3 = (head1, head2) => {
  // set a dummy node as the first node
  // set a tail to track the current value of the merged list
  // iterate through the lists until one of them is null
  // set the node with the smaller value to the next value of the dummy node
  // tack on any remaining values from either list
  // return the dummy node's next value
  const dummyNode = new Node(null);
  let tail = dummyNode;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null && current2 != null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 != null) tail.next = current1;
  if (current2 != null) tail.next = current2;

  return dummyNode.next;
};
// Time: O(min(N,M)) to iterate through the shortest of lists of length N or M
// Space: O(1) for constant variable space
// Reset test lists:
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = null;

q.next = r;
r.next = s;
s.next = t;
t.next = null;
const result3 = mergeListsRecursive(a, q);
displayTestResult(result3);
