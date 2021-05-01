class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insert(data){
        const node = new Node(data);
        if(this.head === null){
            this.head = node;
            this.tail = node;
            return
        }
        let curr = this.head;
        while (curr.next){
            curr = curr.next;
        }
        curr.next = node;
        node.prev = curr;
        this.tail = node;
    }
    display(){
        let curr = this.head;
        let ans = "";
        while(curr){
            ans += curr.data + ' ';
            curr = curr.next;
        }
        console.log(ans)
    }
}
class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

export { DoublyLinkedList, Node }
