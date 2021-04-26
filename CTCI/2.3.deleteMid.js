import { LinkedList, Node } from "./linkedList.js"

class Solution extends LinkedList{
    deleteMid(){
        let slow = this.head;
        let fast = this.head;
        let prev = slow;
        let iter = 0;
        while (fast && fast.next){
            fast = fast.next.next;
            prev = slow;
            slow = slow.next
            iter++;
        }
        prev.next = slow.next;
    }
    deleteGivenNode(node){
        if(node){
            node = node.next;
        }
    }
    returnNode(i){
        let curr = this.head;
        while (curr && i){
            curr = curr.next
            i--
        }
        return curr
    }
}

let sol = new Solution();
for(let i = 0; i < 9; i++){
    sol.insertEnd(i);
}
console.log(sol.display());
console.log("delete node");
let n = sol.returnNode(3);
console.log(n);
sol.deleteGivenNode(n);
console.log(sol.display());

