import { LinkedList } from './linkedList.js';

class Solution extends LinkedList{
    removeDups(){
        let curr = this.head;
        let occ = new Map();
        let iter = 0;
        while(curr){
            if (occ[curr.data]){
                console.log(this.deleteIndex(iter))
                iter--;
            }
            else
                occ[curr.data] = true;
            curr = curr.next;
            iter ++;
        }
        this.display();
    }
    removeDups2(){

    }
}

let ll = new Solution();
let arr = [1,2,1,3,4,5,6,6]

for(let i of arr){
    ll.insertEnd(i);
}

ll.display();
console.log("removing duplicates");

ll.removeDups();
