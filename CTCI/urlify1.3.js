function sol1(str , n){

    let ans = "";
    for(let i = 0; i < n; i++){
        if (str[i] === ' '){
            ans += '%20';
        }
        else
            ans += str[i];
    }
    return ans;
}

let s = 'Mr John Smith    ';
console.log(sol1(s,13));
