// Problem 1472. Design Browser History
function Node(val, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

var BrowserHistory = function (homepage) {
  let startNode = new Node(homepage);
  this.current = startNode;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.current.next = new Node(url, this.current);
  this.current = this.current.next;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (this.current.prev && steps > 0) {
    this.current = this.current.prev;
    steps--;
  }
  return this.current.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (this.current.next && steps > 0) {
    this.current = this.current.next;
    steps--;
  }
  return this.current.val;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
