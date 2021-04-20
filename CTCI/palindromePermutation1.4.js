function sol1(str){
    let n = str.length;

    if (n % 2 === 0){
        return false
    }
    let map = new Map();

    for(let i = 0 ; i < n; i++){
        if ( map[str[i]] )
            map[str[i]]++;
        else
            map[str[i]] = 1;
    }
    let odd = false;
    let values = Object.values(map);

    for(let v of values){
        if ( v % 2 === 1 ){
            if (odd)
                return false;
            odd = true;
        }
    }
    return true;
}

let s = 'tacocat'
console.log(sol1(s));
