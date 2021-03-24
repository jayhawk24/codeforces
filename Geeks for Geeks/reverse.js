
let rev = "";
let strarr = [];
let str = "APPLE";
for (i in str){
    strarr.push(str[i]);
}
console.log(strarr);
strarr = strarr.reverse();
revstr = "";
for (i in strarr){
    revstr+=strarr[i];
}
console.log(revstr);
