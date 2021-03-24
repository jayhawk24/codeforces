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
  let arr = input.split("\n")[1].split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    if (parseInt(arr[i]) > parseInt(arr[i++])) {
      console.log(arr[i]);
      i++;
    }
  }
}
