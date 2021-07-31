export default class Graph {
  constructor(data, options) {
    this.data = data;
    this.options = options;
    this.graph = null;
    this.nodes = [];
    this.links = [];
    this.nodeMap = {};
    this.linkMap = {};
    this.init();
  }
  init() {
    this.graph = new GraphLayout(this.data, this.options);
    this.nodes = this.graph.nodes;
    this.links = this.graph.links;
    this.nodeMap = this.graph.nodeMap;
    this.linkMap = this.graph.linkMap;
  }
  nodeMap() {
    return this.nodeMap;
  }
  linkMap() {
    return this.linkMap;
  }
  getNode(id) {
    return this.nodeMap[id];
  }
  getLink(id) {
    return this.linkMap[id];
  }
  getNodes() {
    return this.nodes;
  }
  getLinks() {
    return this.links;
  }
  getNodeCount() {
    return this.nodes.length;
  }
  getLinkCount() {
    return this.links.length;
  }
  getNodeMap() {
    return this.nodeMap;
  }
  getLinkMap() {
    return this.linkMap;
  }
  getGraph() {
    return this.graph;
  }
}
