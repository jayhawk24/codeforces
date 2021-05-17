class Stack{
    constructor(n){
        this.stack = new Array(n).fill(0);
        this.tp = -1
        this.min = 0
    }
    const push = (data) => {
        if (data < this.min){
            this.min = ++this.tp
        }
        this.stack[this.tp] = data
    }
    const pop = () => {
        if (this.tp) === -1{
            return -1
        }
        const rem = this.stack[tp];
        this.stack[tp] = 0
        this.tp -= 1
        return rem
    }
    const getmin = () => {
        return this.min();
    }
}


