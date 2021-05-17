import { LinkedList, Node } from './linkedList.js'

class Solution extends LinkedList{
    detectLoop(){
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next){
            fast = fast.next.next
            slow = slow.next
            if (fast === slow){
                break
            }
            if(!fast && !fast.next){
                return null
            }
        }
        slow = this.head
        while(slow !== fast){
            slow = slow.next;
            fast = fast.next;
        }
        return fast.data
    }
    looper(n){
        let iter = 1,target = null;
        let curr = this.head;

        while( curr.next ){
            curr = curr.next
            if (iter === n){
                target = curr;
            }
            iter++;
        }
        curr.next = target;
    }
    printNodes(n){
        let curr = this.head;
        while (curr && n){
            console.log(curr.data)
            curr = curr.next
            n--
        }
    }
}
let ll = new Solution();
let arr = [1,2,3,4,5,6,7,8,9]
for(let i of arr){
    ll.insertEnd(i)
}
console.log(ll.display());
ll.looper(1);
ll.printNodes(15);
console.log(ll.detectLoop());
