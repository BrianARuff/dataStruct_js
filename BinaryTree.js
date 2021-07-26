export default class BST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.data === data) {
      return;
    }

    if (this.data > data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new BST(data);
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new BST(data);
      }
    }
  }

  search(data) {
    if (this.data === data) {
      return true;
    }

    if (this.data > data) {
      if (this.left) {
        return this.left.search(data);
      } else {
        return false;
      }
    } else {
      if (this.right) {
        return this.right.search(data);
      } else {
        return false;
      }
    }
  }

  inOrderTraversal(callback) {
    if (this.left) {
      this.left.inOrderTraversal(callback);
    }

    callback(this.data);

    if (this.right) {
      this.right.inOrderTraversal(callback);
    }
  }

  preOrderTraversal(callback) {
    callback(this.data);

    if (this.left) {
      this.left.preOrderTraversal(callback);
    }

    if (this.right) {
      this.right.preOrderTraversal(callback);
    }
  }

  postOrderTraversal(callback) {
    if (this.left) {
      this.left.postOrderTraversal(callback);
    }

    if (this.right) {
      this.right.postOrderTraversal(callback);
    }

    callback(this.data);
  }

  getMax() {
    if (!this.right) {
      return this.data;
    }

    return this.right.getMax();
  }

  getMin() {
    if (!this.left) {
      return this.data;
    }

    return this.left.getMin();
  }

  getHeight() {
    if (!this.left && !this.right) {
      return 0;
    }

    if (!this.left) {
      return 1 + this.right.getHeight();
    }

    if (!this.right) {
      return 1 + this.left.getHeight();
    }

    return 1 + Math.max(this.left.getHeight(), this.right.getHeight());
  }

  getSize() {
    if (!this.left && !this.right) {
      return 1;
    }

    if (!this.left) {
      return 1 + this.right.getSize();
    }

    if (!this.right) {
      return 1 + this.left.getSize();
    }

    return 1 + this.left.getSize() + this.right.getSize();
  }

  getBalance() {
    if (!this.left && !this.right) {
      return 0;
    }

    if (!this.left) {
      return this.right.getHeight();
    }

    if (!this.right) {
      return -this.left.getHeight();
    }

    return this.right.getHeight() - this.left.getHeight();
  }

  getLevel() {
    if (!this.left && !this.right) {
      return 0;
    }

    if (!this.left) {
      return this.right.getLevel() + 1;
    }

    if (!this.right) {
      return this.left.getLevel() + 1;
    }

    return Math.max(this.left.getLevel(), this.right.getLevel()) + 1;
  }

  getLeafCount() {
    if (!this.left && !this.right) {
      return 1;
    }

    if (!this.left) {
      return this.right.getLeafCount();
    }

    if (!this.right) {
      return this.left.getLeafCount();
    }

    return this.left.getLeafCount() + this.right.getLeafCount();
  }

  getInternalNodeCount() {
    if (!this.left && !this.right) {
      return 0;
    }

    if (!this.left) {
      return this.right.getInternalNodeCount();
    }

    if (!this.right) {
      return this.left.getInternalNodeCount();
    }

    return this.left.getInternalNodeCount() + this.right.getInternalNodeCount();
  }

  getExternalNodeCount() {
    if (!this.left && !this.right) {
      return 1;
    }

    if (!this.left) {
      return this.right.getExternalNodeCount();
    }

    if (!this.right) {
      return this.left.getExternalNodeCount();
    }

    return this.left.getExternalNodeCount() + this.right.getExternalNodeCount();
  }

  getLeafToInternalRatio() {
    if (!this.left && !this.right) {
      return 0;
    }

    if (!this.left) {
      return this.right.getLeafToInternalRatio();
    }

    if (!this.right) {
      return this.left.getLeafToInternalRatio();
    }

    return (
      this.left.getLeafToInternalRatio() + this.right.getLeafToInternalRatio()
    );
  }

  getInternalToExternalRatio() {
    if (!this.left && !this.right) {
      return 0;
    }

    if (!this.left) {
      return this.right.getInternalToExternalRatio();
    }

    if (!this.right) {
      return this.left.getInternalToExternalRatio();
    }

    return (
      this.left.getInternalToExternalRatio() +
      this.right.getInternalToExternalRatio()
    );
  }
}
