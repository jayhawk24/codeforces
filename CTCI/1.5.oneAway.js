function sol1(str1, str2){
    if( Math.abs(str1.length - str2.length) > 1 )
        return false

    let map = new Map();

    for (let s of str1){
        if( map[s] )
            map[s]++;
        else
            map[s] = 1;
    }

    let edit = 0;

    for (let s of str2){
        if ( map[s] && map[s] > 0)
            map[s]--;
        else
            edit++;
    }

    let val = Object.values(map);

    for (let v of val){
        if (v !== 0)
            edit++;
    }

    if (edit < 2)
        return true

    return false
}

let str1 = 'pale'
let str2 = 'pake'

console.log(sol1(str1,str2));

