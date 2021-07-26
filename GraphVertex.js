export default class GraphVertex {
  constructor(id, label, color, shape, size, x, y, z, text) {
    this.id = id;
    this.label = label;
    this.color = color;
    this.shape = shape;
    this.size = size;
    this.x = x;
    this.y = y;
    this.z = z;
    this.text = text;
  }

  getId() {
    return this.id;
  }

  getLabel() {
    return this.label;
  }

  getColor() {
    return this.color;
  }

  getShape() {
    return this.shape;
  }

  getSize() {
    return this.size;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getZ() {
    return this.z;
  }

  getText() {
    return this.text;
  }

  setId(id) {
    this.id = id;
  }

  setLabel(label) {
    this.label = label;
  }

  setColor(color) {
    this.color = color;
  }

  setShape(shape) {
    this.shape = shape;
  }

  setSize(size) {
    this.size = size;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  setZ(z) {
    this.z = z;
  }

  setText(text) {
    this.text = text;
  }

  toString() {
    return `id: ${this.id}, label: ${this.label}, color: ${this.color}, shape: ${this.shape}, size: ${this.size}, x: ${this.x}, y: ${this.y}, z: ${this.z}, text: ${this.text}`;
  }

  static fromJson(json) {
    return new GraphVertex(
      json.id,
      json.label,
      json.color,
      json.shape,
      json.size,
      json.x,
      json.y,
      json.z,
      json.text
    );
  }

  static fromJsonArray(jsonArray) {
    return jsonArray.map(GraphVertex.fromJson);
  }

  static fromJsonObject(jsonObject) {
    return new GraphVertex(
      jsonObject.id,
      jsonObject.label,
      jsonObject.color,
      jsonObject.shape,
      jsonObject.size,
      jsonObject.x,
      jsonObject.y,
      jsonObject.z,
      jsonObject.text
    );
  }

  static fromJsonObjectArray(jsonObjectArray) {
    return jsonObjectArray.map(GraphVertex.fromJsonObject);
  }

  static fromJsonObjectMap(jsonObjectMap) {
    return jsonObjectMap.map(GraphVertex.fromJsonObject);
  }

  static fromJsonObjectMapArray(jsonObjectMapArray) {
    return jsonObjectMapArray.map(GraphVertex.fromJsonObjectMap);
  }

  static fromJsonObjectSet(jsonObjectSet) {
    return jsonObjectSet.map(GraphVertex.fromJsonObject);
  }

  static fromJsonObjectSetArray(jsonObjectSetArray) {
    return jsonObjectSetArray.map(GraphVertex.fromJsonObjectSet);
  }

  static fromJsonObjectSetMap(jsonObjectSetMap) {
    return jsonObjectSetMap.map(GraphVertex.fromJsonObject);
  }

  static fromJsonObjectSetMapArray(jsonObjectSetMapArray) {
    return jsonObjectSetMapArray.map(GraphVertex.fromJsonObjectSet);
  }
}
