import { DoublyLinkedList } from './doublyLinkedList.js';
import { LinkedList, Node } from './linkedList.js';


class Solution extends DoublyLinkedList{
    partition(x){
        let curr = this.head;
        let n = 0
        while(curr.next){
            curr=curr.next
            n += 1;
        }
        let start = this.head
        let end = curr;
        let iter = 0
        while (iter < n){
            if(start.data >= x){

                while (end.data >= x){
                    if (n <= iter){
                        return
                    }
                    end = end.prev
                    n -= 1
                }

                let temp = end.data;
                end.data = start.data;
                start.data = temp;
            }
            iter += 1
            start = start.next
        }
    }
}

class Solution2 extends LinkedList {
    partition(x){
        let lowhead = null;
        let highhead = null;
        let curr = this.head;

        while (curr){

            let node = new Node(curr.data);

            if (x > curr.data){
                if(!highhead)
                    highhead = node
                else{
                    while(highead.next)
                        highhead = highhead.next
                    highhead.next = node
                }
            }
            else{
                if(!lowhead)
                    lowhead = node;
                else{
                    while(lowhead.next)
                        lowhead = lowhead.next
                    lowhead.next = node
                }
            }
            curr = curr.next;
        }

        curr = lowhead;
        while(curr)
            curr = curr.data
        curr.next = highhead;
        this.head = lowhead;

    }
}

let arr = [3,5,8,5,10,2,1]

const dll = new Solution();

for (let i of arr){
    dll.insert(i)
}

dll.display();
dll.partition(5);
dll.display();
