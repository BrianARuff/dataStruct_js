export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }
  set(index, value) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.data = value;
  }
  add(value) {
    if (this.length === 0) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      let newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (index === this.length) {
      let newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      let newNode = new Node(value);
      newNode.next = current;
      current.prev = newNode;
      newNode.prev = current.prev;
      current.prev.next = newNode;
    }
    this.length++;
  }
  toArray() {
    let array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }
  toString() {
    let array = this.toArray();
    return array.join(", ");
  }
}
