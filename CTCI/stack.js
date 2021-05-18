class Stack{
    constructor(){
        this.arr = []
        this.top = -1
    }
    push(data){
        this.arr.push(data);
        this.top++
    }
    pop(){
        if(!this.empty()){
            this.top--;
            return (this.arr.pop())
        }
        return -1
    }
    empty(){
        if(this.top !== -1)
            return false
        return true
    }
    peek(){
        return this.arr[this.top];
    }
}

export default Stack;
