process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;
});
process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  let inputLines = input.split("\n");
  for (let i = inputLines.length - 1; i > 0; i--) {
    console.log(inputLines[i]);
  }
}
