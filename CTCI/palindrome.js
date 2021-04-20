function getPermutations(str, start, end, perms) {
  if (start === end - 1) {
    perms.add(str);
  } else {
    for (let curr = start; curr < end; curr++) {
      let arr = str.split("");
      [arr[curr], arr[start]] = [arr[start], arr[curr]];

      getPermutations(arr.join(""), start + 1, end, perms);

      let temp = arr[curr];
      arr[curr] = arr[start];
      arr[start] = temp;
    }
  }
}
function palindrome(str){
    let rev = str.split('').reverse().join('');
    if(str === rev)
        return true
    else
        return false
}

function main(){
    let perms = new Set();
    let str = "tactcoa";
    getPermutations(str, 0 , str.length, perms);
    for (let p of perms){
        if (palindrome(p))
            return true
    }
    return false
}
console.log(main())
