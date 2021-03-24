process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});
function main(input) {
  let num = parseInt(input);
  process.stdout.write(step(num)); // Writing output to STDOUT
}
function step(n) {
  if (n == 0 || n == 1) return 1;
  if (n == 2) return 2;
  return step(n - 1) + step(n - 2) + step(n - 3);
}
