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
        while (curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}

export { LinkedList, Node }
