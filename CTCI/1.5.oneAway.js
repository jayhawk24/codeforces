function sol1(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let map = new Map();

  for (let s of str1) {
    if (map[s]) map[s]++;
    else map[s] = 1;
  }

  let edit = 0;

  for (let s of str2) {
    if (map[s] && map[s] > 0) map[s]--;
    else edit++;
  }

  let val = Object.values(map);

  for (let v of val) {
    if (v !== 0) edit++;
  }

  if (edit < 3) return true;

  return false;
}

function sol2(str1, str2){

    let n = str1.length;
    let m = str2.length;

    if (Math.abs(n - m) > 1)
        return false

    let first = n > m ? str1 : str2;
    let second = n > m ? str2 : str1;

    let i =0 , j = 0, edit = false;
    while( i < first.length && j < second.length){
        if (first[i] === second[j]){
            j++
        }
        else{
            if (edit)
                return false
            edit = true
            if (first.length === second.length)
                j++
        }
        i++
    }
    return true;

}

let str1 = "pales";
let str2 = "pale";

console.log(sol2(str1, str2));
