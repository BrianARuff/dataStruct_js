export default class PriorityQueue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }
  enqueue(element) {
    this.queue.push(element);
    this.length++;
  }
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let element = this.queue[0];
    this.queue.splice(0, 1);
    this.length--;
    return element;
  }
  peek() {
    if (this.length === 0) {
      return undefined;
    }
    return this.queue[0];
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
}
