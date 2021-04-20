function sol1(str1, str2){

    let chars = new Map();

    if (str1.length === str2.length){

        for (let c of str1){
            if (chars[c]){
                chars[c]++;
            }
            else
                chars[c] = 1;
        }
        for (let c of str2){
            if (chars[c]){
                chars[c]--;
            }
            else
                return false;
        }

        let vals = Object.values(chars);
        for (let v of vals){
            if (v !== 0)
                return false;
        }
        return true;
    }
    return false;
}

function sol2(str1, str2){
    if (str1.length === str2.length){
        let arr1 = str1.split('').sort()
        let arr2 = str2.split('').sort()

        for (let i=0;i<arr1.length;i++){
            if (arr1[i] !== arr2[i])
                return false
        }
        return true

    }

    return false
}

let str1 = 'asbscf'
let str2 = 'asbsfc'

console.log(sol1(str1,str2));

console.log(sol2(str1,str2));
