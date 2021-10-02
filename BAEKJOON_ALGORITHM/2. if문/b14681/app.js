const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const X = input[0];
  const Y = input[1];

  if (X > 0) {
    console.log(Y > 0 ? 1 : 4);
  } else {
    console.log(Y > 0 ? 2 : 3);
  }
});
