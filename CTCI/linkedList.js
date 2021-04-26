class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
    }

    insertEnd(data){

        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return
        }

        let curr = this.head;

        while (curr.next)
            curr = curr.next;

        curr.next = newNode;
    }

    insertStart(data){
        let newNode = new Node(data);
        if (this.head === null){
            this.head = newNode;
            return
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteIndex(ind){
        let curr = this.head;
        if (ind === 1){
            this.head = this.head.next;
            return
        }
        let iter = 0;
        while (curr){
            if ( iter + 1 === ind ){
                curr.next = curr.next.next;
                return true
            }
            curr = curr.next;
            iter++;
        }
        return false
    }

    deleteNode(data){
        if (this.head.data === data){
            this.head = this.head.next;
            return
        }
        let curr = this.head;
        while (curr.next){
            if(curr.next.data === data){
                curr.next = curr.next.next;
                return true
            }
            curr = curr.next;
        }
        return false
    }

    display(){
        let curr = this.head;
        let ans = "";
        while (curr){
            ans += " " + curr.data;
            curr = curr.next
        }
        return ans;
    }
}

export { LinkedList, Node }
