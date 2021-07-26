export default class MultiWayTree {
  constructor(data, options) {
    this.options = options || {};
    this.root = null;
    this.nodes = [];
    this.nodesMap = {};
    this.indexes = {};
    this.init(data);
  }
  init(data) {
    this.root = new MultiWayTreeNode(null, null, data[0], this.options);
    this.nodes.push(this.root);
    this.nodesMap[this.root.id] = this.root;
    this.indexes[this.root.id] = 0;
    for (let i = 1; i < data.length; i++) {
      let nodeData = data[i];
      let parentId = nodeData[0];
      let parent = this.getNodeById(parentId);
      if (!parent) {
        throw new Error(`Parent with id ${parentId} not found`);
      }
      let child = new MultiWayTreeNode(
        parent,
        this.root,
        nodeData,
        this.options
      );
      this.nodes.push(child);
      this.nodesMap[child.id] = child;
      this.indexes[child.id] = i;
    }
  }
  getNodeById(id) {
    return this.nodesMap[id];
  }
  getNodeByIndex(index) {
    return this.nodes[index];
  }
  getIndexById(id) {
    return this.indexes[id];
  }
  getIndexByNode(node) {
    return this.indexes[node.id];
  }
  getIndexByIndex(index) {
    return this.nodes[index];
  }
  getParentId(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.parentId;
  }
  getParentNode(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.parent;
  }
  getChildrenIds(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.childrenIds;
  }
  getChildrenNodes(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.children;
  }
  getChildrenIndexes(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.childrenIndexes;
  }
  getChildrenCount(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.children.length;
  }
  getParentIndex(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.parentIndex;
  }
  getChildrenIndex(id, childId) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    let child = this.getNodeById(childId);
    if (!child) {
      throw new Error(`Node with id ${childId} not found`);
    }
    return node.childrenIndexes[childId];
  }
  getChildrenCountById(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.children.length;
  }
  getChildIdsById(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.childrenIds;
  }
  getChildNodesById(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.children;
  }
  getChildIndexesById(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.childrenIndexes;
  }
  getChildCountById(id) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    return node.children.length;
  }
  getChildrenIndexById(id, childId) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    let child = this.getNodeById(childId);
    if (!child) {
      throw new Error(`Node with id ${childId} not found`);
    }
    return node.childrenIndexes[childId];
  }
  getChildrenCountByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.children.length;
  }
  getParentIndexByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.parentIndex;
  }
  getParentIdByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.parentId;
  }
  getChildrenIndexByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.childrenIndexes;
  }
  getChildrenIdsByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.childrenIds;
  }
  getChildIdsByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.childrenIds;
  }
  getChildNodesByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.children;
  }
  getChildIndexesByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.childrenIndexes;
  }
  getChildCountByIndex(index) {
    let node = this.getNodeByIndex(index);
    if (!node) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.children.length;
  }
  getChildrenIndexByIdAndIndex(id, index) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    let child = this.getNodeByIndex(index);
    if (!child) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.childrenIndexes[childId];
  }
  getChildrenCountByIdAndIndex(id, index) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    let child = this.getNodeByIndex(index);
    if (!child) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.children.length;
  }
  getChildIdsByIdAndIndex(id, index) {
    let node = this.getNodeById(id);
    if (!node) {
      throw new Error(`Node with id ${id} not found`);
    }
    let child = this.getNodeByIndex(index);
    if (!child) {
      throw new Error(`Node with index ${index} not found`);
    }
    return node.childrenIds;
  }
}
