class Hash {
   constructor(obj) {
      this.obj = obj;
   }
   get(key) {
      return this.obj[key];
   }
   set(key, value) {
      this.obj[key] = value;
   }
   has(key) {
      return this.obj.hasOwnProperty(key);
   }
   delete(key) {
      delete this.obj[key];
   }
   clear() {
      this.obj = {};
   }
   forEach(callback) {
      for (var key in this.obj) {
         if (this.obj.hasOwnProperty(key)) {
            callback(this.obj[key], key);
         }
      }
   }
   size() {
      var size = 0;
      for (var key in this.obj) {
         if (this.obj.hasOwnProperty(key)) {
            size++;
         }
      }
      return size;
   }
   keys() {
      var keys = [];
      for (var key in this.obj) {
         if (this.obj.hasOwnProperty(key)) {
            keys.push(key);
         }
      }
      return keys;
   }
   values() {
      var values = [];
      for (var key in this.obj) {
         if (this.obj.hasOwnProperty(key)) {
            values.push(this.obj[key]);
         }
      }
      return values;
   }
   entries() {
      var entries = [];
      for (var key in this.obj) {
         if (this.obj.hasOwnProperty(key)) {
            entries.push({ key: key, value: this.obj[key] });
         }
      }
      return entries;
   }
   toString() {
      return JSON.stringify(this.obj);
   }
}
