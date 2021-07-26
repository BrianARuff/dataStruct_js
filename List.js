class List {
   constructor(data) {
      this.data = data;
   }
   get(index) {
      return this.data[index];
   }
   set(index, value) {
      this.data[index] = value;
   }
   add(value) {
      this.data.push(value);
   }
   remove(index) {
      this.data.splice(index, 1);
   }
   clear() {
      this.data = [];
   }
   contains(value) {
      return this.data.indexOf(value) !== -1;
   }
   indexOf(value) {
      return this.data.indexOf(value);
   }
   size() {
      return this.data.length;
   }
   toString() {
      return this.data.toString();
   }
}
