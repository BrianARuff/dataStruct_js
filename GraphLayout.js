class GraphLayout {
  constructor(graph, options) {
    this.graph = graph;
    this.options = options;
  }
  run() {
    throw new Error("Not implemented");
  }

  get graph() {
    return this._graph;
  }

  set graph(value) {
    this._graph = value;
  }

  get options() {
    return this._options;
  }

  set options(value) {
    this._options = value;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get position() {
    return this._position;
  }
}
