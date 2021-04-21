import { LinkedList } from './linkedList.js';

class Solution extends LinkedList{
    removeDups(){

    }
}

let ll = new Solution();
let arr = [1,2,3,4,5,6]

for(let i of arr){
    ll.insertEnd(i);
}

ll.display();
ll.removeDups();
