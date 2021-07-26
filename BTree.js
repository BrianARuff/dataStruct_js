export default class BTree {
  constructor(root) {
    this.root = root;
  }
  insert(key, value) {
    if (this.root === null) {
      this.root = new Node(key, value);
    } else {
      this.root = this.root.insert(key, value);
    }
  }
  search(key) {
    if (this.root === null) {
      return null;
    } else {
      return this.root.search(key);
    }
  }
  delete(key) {
    if (this.root === null) {
      return false;
    } else {
      this.root = this.root.delete(key);
      return true;
    }
  }
  print() {
    if (this.root === null) {
      return;
    } else {
      this.root.print();
    }
  }
}
