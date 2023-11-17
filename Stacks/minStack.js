// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

var MinStack = function() {
    this.stack = [];
    this.min = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if (this.min.length === 0) {
        this.min.push(val);
    } else {
        if (val < this.min[this.min.length - 1]) {
            this.min.push(val);
        } else {
            this.min.push(this.min[this.min.length - 1])
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 0) this.stack.length--;
    if (this.min.length > 0) this.min.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};
// Time complexity is O(1) by implementing another stack to track the min.
// Space complexity is O(N) because the length of the stacks depends on the input parameters.
