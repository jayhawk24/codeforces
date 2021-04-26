import { LinkedList } from "./linkedList.js";

class kthToLast extends LinkedList {
  naive(k) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      curr = curr.next;
      count += 1;
    }
    curr = this.head;
    let iter = count - k;
    while (iter) {
      curr = curr.next;
      iter--;
    }
    return curr.data;
  }
  recursive(node, k) {
    if (!node) return 0;
    else {
      let ind = this.recursive(node.next, k) + 1;
      if (ind === k) {
        console.log(`${k}th To last is ${node.data}`);
        return;
      }
      return ind;
    }
  }
    optimized(k){
        let slow = this.head;
        let fast = this.head;
        let iter = k;
        while(iter){
            fast = fast.next
            iter --;
        }
        while (fast){
            fast = fast.next;
            slow = slow.next;
        }
        return slow.data;
    }
}

let sol = new kthToLast();
for (let i = 0; i < 6; i++) {
  sol.insertEnd(i);
}
sol.display();
let k = 6;
console.log(sol.optimized(k));
