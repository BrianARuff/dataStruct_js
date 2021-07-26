class RoutingTable {
   constructor(routingTable) {
      this.routingTable = routingTable;
   }
   get(key) {
      return this.routingTable[key];
   }
   set(key, value) {
      this.routingTable[key] = value;
   }
   delete(key) {
      delete this.routingTable[key];
   }
   clear() {
      this.routingTable = {};
   }
}
