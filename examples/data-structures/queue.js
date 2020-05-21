/*
Queues are very similar to stacks however they use the “first-in-first- out” paradigm. This means that the oldest element (the element that was added first) is the next item to be removed.
 */

export default class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  enqueue(item) {
    // Adding item to the right of the queue
    this.queue.push(item);
  }

  dequeue() {
    // Removing first item in the queue
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.lentgh === 0;
  }
}
