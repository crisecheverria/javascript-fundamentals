/*
There are three primary methods (push, pop, peek) in a stack and a few additional methods (isEmpty, get length) you may add to help with different tasks
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    // Return the last item in the stack without removing it
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}
