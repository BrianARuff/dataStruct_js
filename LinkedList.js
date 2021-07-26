export default class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   get(index) {
      if (index < 0 || index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      return current.data;
   }
   set(index, value) {
      if (index < 0 || index >= this.length) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      current.data = value;
   }
   add(value) {
      if (this.length === 0) {
         this.head = { data: value };
         this.tail = this.head;
      } else {
         let node = { data: value };
         this.tail.next = node;
         this.tail = node;
      }
      this.length++;
   }
   remove(index) {
      if (index < 0 || index >= this.length) return;
      if (index === 0) {
         this.head = this.head.next;
         this.length--;
      } else if (index === this.length - 1) {
         let current = this.head;
         for (let i = 0; i < index - 1; i++) current = current.next;
         current.next = null;
         this.tail = current;
         this.length--;
      } else {
         let current = this.head;
         for (let i = 0; i < index; i++) current = current.next;
         let next = current.next;
         current.next = next.next;
         this.length--;
      }
   }
   clear() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   toString() {
      let current = this.head;
      let str = '';
      while (current) {
         str += current.data + ' ';
         current = current.next;
      }
      return str;
   }
   retreive(index) {
      if (index < 0 || index >= this.length) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      return current.data;
   }
   insert(index, value) {
      if (index < 0 || index > this.length) return;
      if (index === 0) {
         let node = { data: value };
         node.next = this.head;
         this.head = node;
         this.length++;
      } else if (index === this.length) {
         let current = this.head;
         for (let i = 0; i < index - 1; i++) current = current.next;
         let node = { data: value };
         node.next = current.next;
         current.next = node;
         this.length++;
      } else {
         let current = this.head;
         for (let i = 0; i < index; i++) current = current.next;
         let node = { data: value };
         node.next = current.next;
         current.next = node;
         this.length++;
      }
   }
   removeAt(index) {
      if (index < 0 || index >= this.length) return;
      if (index === 0) {
         this.head = this.head.next;
         this.length--;
      } else if (index === this.length - 1) {
         let current = this.head;
         for (let i = 0; i < index - 1; i++) current = current.next;
         current.next = null;
         this.tail = current;
         this.length--;
      } else {
         let current = this.head;
         for (let i = 0; i < index; i++) current = current.next;
         let next = current.next;
         current.next = next.next;
         this.length--;
      }
   }
   remove(value) {
      let current = this.head;
      let previous = null;
      while (current) {
         if (current.data === value) {
            if (previous) previous.next = current.next;
            else this.head = current.next;
            if (current === this.tail) this.tail = previous;
            this.length--;
            return;
         }
         previous = current;
         current = current.next;
      }
   }
   removeAll(value) {
      let current = this.head;
      let previous = null;
      while (current) {
         if (current.data === value) {
            if (previous) previous.next = current.next;
            else this.head = current.next;
            if (current === this.tail) this.tail = previous;
            this.length--;
         }
         previous = current;
         current = current.next;
      }
   }
   contains(value) {
      let current = this.head;
      while (current) {
         if (current.data === value) return true;
         current = current.next;
      }
      return false;
   }
   indexOf(value) {
      let current = this.head;
      let index = 0;
      while (current) {
         if (current.data === value) return index;
         current = current.next;
         index++;
      }
      return -1;
   }
   indexOfFrom(value, index) {
      if (index < 0 || index >= this.length) return -1;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         if (current.data === value) return i;
         current = current.next;
      }
      return -1;
   }
   containsAll(values) {
      let current = this.head;
      while (current) {
         if (values.indexOf(current.data) < 0) return false;
         current = current.next;
      }
      return true;
   }
   containsAny(values) {
      let current = this.head;
      while (current) {
         if (values.indexOf(current.data) >= 0) return true;
         current = current.next;
      }
      return false;
   }
   containsFrom(values, index) {
      if (index < 0 || index >= this.length) return false;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         if (values.indexOf(current.data) >= 0) return true;
         current = current.next;
      }
      return false;
   }
   containsAllFrom(values, index) {
      if (index < 0 || index >= this.length) return false;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         if (values.indexOf(current.data) < 0) return false;
         current = current.next;
      }
      return true;
   }
   containsAnyFrom(values, index) {
      if (index < 0 || index >= this.length) return false;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         if (values.indexOf(current.data) >= 0) return true;
         current = current.next;
      }
      return false;
   }
   sort() {
      let current = this.head;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (temp > next.data) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortDescending() {
      let current = this.head;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (temp < next.data) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortBy(compare) {
      let current = this.head;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortDescendingBy(compare) {
      let current = this.head;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortByFrom(compare, index) {
      if (index < 0 || index >= this.length) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortDescendingByFrom(compare, index) {
      if (index < 0 || index >= this.length) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortByAll(compares) {
      let current = this.head;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compares.indexOf(temp) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortDescendingByAll(compares) {
      let current = this.head;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compares.indexOf(temp) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortByAllFrom(compares, index) {
      if (index < 0 || index >= this.length) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compares.indexOf(temp) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortDescendingByAllFrom(compares, index) {
      if (index < 0 || index >= this.length) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compares.indexOf(temp) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortByRange(compare, start, end) {
      if (start < 0 || end >= this.length || start > end) return;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < end; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortDescendingByRange(compare, start, end) {
      if (start < 0 || end >= this.length || start > end) return;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < end; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortByRangeFrom(compare, start, end, index) {
      if (index < 0 || index >= this.length || start > end) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < end; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortDescendingByRangeFrom(compare, start, end, index) {
      if (index < 0 || index >= this.length || start > end) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < end; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortByRangeTo(compare, start, end, index) {
      if (index < 0 || index >= this.length || start > end) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < end; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }
   sortDescendingByRangeTo(compare, start, end, index) {
      if (index < 0 || index >= this.length || start > end) return;
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) > 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
      current = this.head;
      for (let i = 0; i < end; i++) current = current.next;
      while (current) {
         let next = current.next;
         let temp = current.data;
         while (next) {
            if (compare(temp, next.data) < 0) {
               let data = next.data;
               next.data = temp;
               temp = data;
            }
            next = next.next;
         }
         current.data = temp;
         current = current.next;
      }
   }

   // *************************
   // ***** Searching *****
   // *************************
   search(compare, data) {
      let current = this.head;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchFrom(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchByRange(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchFromTo(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchByRangeTo(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchDescending(compare, data) {
      let current = this.head;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchDescendingFrom(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchDescendingByRange(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchDescendingByRangeTo(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchAscending(compare, data) {
      let current = this.head;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchAscendingFrom(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchAscendingByRange(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchAscendingByRangeTo(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchFromToDescending(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchByRangeFromToDescending(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchDescendingFromTo(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchDescendingByRangeToDescending(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
   searchDescendingFromToDescending(compare, start, end, data) {
      if (start < 0 || end > this.length || start > end) return null;
      let current = this.head;
      for (let i = 0; i < start; i++) current = current.next;
      while (current) {
         if (compare(data, current.data)) return current;
         current = current.next;
      }
      return null;
   }
}
class BST {
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

      return (
         this.left.getInternalNodeCount() + this.right.getInternalNodeCount()
      );
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

      return (
         this.left.getExternalNodeCount() + this.right.getExternalNodeCount()
      );
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
         this.left.getLeafToInternalRatio() +
         this.right.getLeafToInternalRatio()
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
   }class BST {
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