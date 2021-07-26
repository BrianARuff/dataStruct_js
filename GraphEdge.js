export default class GraphEdge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }

  toString() {
    return `${this.from} -> ${this.to} (${this.weight})`;
  }

  getFrom() {
    return this.from;
  }

  getTo() {
    return this.to;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  equals(other) {
    return (
      this.from === other.from &&
      this.to === other.to &&
      this.weight === other.weight
    );
  }

  hashCode() {
    return this.from + this.to + this.weight;
  }
}
