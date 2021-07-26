class Heap {
   constructor(compareFn) {
      this._compareFn = compareFn;
      this._data = [];
   }
   push(value) {
      this._data.push(value);
      this._bubbleUp(this._data.length - 1);
   }
   pop() {
      var value = this._data[0];
      var end = this._data.pop();
      if (this._data.length > 0) {
         this._data[0] = end;
         this._sinkDown(0);
      }
      return value;
   }
   peek() {
      return this._data[0];
   }
   remove(value) {
      var i = this._data.indexOf(value);
      if (i > -1) {
         var end = this._data.pop();
         if (i !== this._data.length) {
            this._data[i] = end;
            if (this._compareFn(end, value) < 0) {
               this._bubbleUp(i);
            } else {
               this._sinkDown(i);
            }
         } else {
            this._data.push(end);
            this._bubbleUp(i);
         }
      }
   }
   _bubbleUp(n) {
      var element = this._data[n];
      while (n > 0) {
         var parentN = Math.floor((n + 1) / 2) - 1;
         var parent = this._data[parentN];
         if (this._compareFn(element, parent) >= 0) {
            break;
         }
         this._data[parentN] = element;
         this._data[n] = parent;
         n = parentN;
      }
   }
   _sinkDown(n) {
      var element = this._data[n];
      while (true) {
         var child2N = (n + 1) * 2;
         var child1N = child2N - 1;
         var swap = null;
         if (child1N < this._data.length) {
            var child1 = this._data[child1N];
            if (this._compareFn(child1, element) < 0) {
               swap = child1N;
            }
         }
         if (child2N < this._data.length) {
            var child2 = this._data[child2N];
            if (this._compareFn(child2, element) < 0) {
               if (swap === null || this._compareFn(child2, child1) < 0) {
                  swap = child2N;
               }
            }
         }
         if (swap === null) {
            break;
         }
         this._data[n] = this._data[swap];
         this._data[swap] = element;
         n = swap;
      }
   }
}
