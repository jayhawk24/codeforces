process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine()); // T Test Cases
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine()); // N length of array
    let a = new Array(n); // read array
    let input_ar = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    for (let i = 0; i < n; i++) a[i] = input_ar[i];
    let obj = new Solution();
    console.log(obj.jayhawk(a, n));
  }
}

class Solution {
  jayhawk(a, n) {
    console.log(a, n);
    return true;
  }
}
