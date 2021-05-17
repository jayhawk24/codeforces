import { LinkedList, Node } from './linkedList.js';

class Solution extends LinkedList {
    sumLists(list1, list2) {
        let carry = 0;
        let ans = null;

        let iter1 = list1,
            iter2 = list2,
            iter3 = ans;
        while (iter1) {
            if(!iter2)
                iter2 = new Node(0);
            let sum = iter1.data + iter2.data + carry;
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            iter1 = iter1.next;
            iter2 = iter2.next;
            let node = new Node(sum);
            if (iter3) {
                iter3.next = node;
                iter3 = iter3.next;
            } else {
                iter3 = node;
                ans = iter3;
            }
        }
        if(carry){
            let node = new Node(carry);
            iter3.next = node
        }
        return ans;
    }
}

let l1 = new LinkedList();
let l2 = new LinkedList();
let l3 = new Solution();

let dig1 = [5,9,8],
    dig2 = [7,1,6];
for (let i = 0; i < dig1.length; i++) {
    l1.insertEnd(dig1[i]);
}
for (let i = 0; i < dig2.length; i++){
    l2.insertEnd(dig2[i]);
}
console.log(l1.display());
console.log(l2.display());

l3.head = l3.sumLists(l1.head, l2.head);
console.log(l3.display());
