function sol(str){
    let compress = "";
    let i = 0;
    while (i < str.length){
        let c = str[i];
        let count = 1;
        i++;
        while (str[i] && str[i] === c){
            i++;
            count++;
        }
        compress = compress + c + count;
    }
    if ( compress.length >= str.length )
        return str
    return compress
}

let str = 'aabbccccccaaab'
console.log(sol(str))
let str2 = 'abcd'
console.log(sol(str2));
