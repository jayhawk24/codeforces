import Stack from './stack.js'

function sortStack(s1){
    const s2 = new Stack();
    const temp = new Stack();

    while(!s1.empty()){
        temp.push(s1.pop())
    }

    let min = temp.peek()

    while(!temp.empty()){
        let poped = temp.pop()

        if ( min >= poped ){
            s1.push(poped)
            min = poped
        }

        else{
            while(!s1.empty()){
                if (s1.peek() > poped)
                    break
                let el = s1.pop()
                s2.push(el)
            }
            s1.push(poped)

            while(!s2.empty()){
                s1.push(s2.pop())
            }
        }
    }
}


const stack = new Stack();

let arr = [5, 7 , 6 ,8 ,1 ,3 ,2 ,4]

for (let i of arr){

    stack.push(i)
    console.log(stack.peek())
}

sortStack(stack)
console.log(stack)

