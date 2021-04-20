function sol1(arr){

    let map = new Map();

    for(let i of arr){
        if (map[i])
            return false;
        else{
            map[i] = 1;
        }
    }
    return true;
}
function sol2(str){

    let arr = str.split("");
    arr.sort();

    for (let i = 0; i<arr.length; ++i){
        if(arr[i] === arr[i-1])
            return false
    }
    return true
}


let s = 'abcdefaghijkl'
console.log(sol1(s));
console.log(sol2(s));
