const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();

for (let i = 0; i < N; i++) {
  console.log(input[i][0] + input[i][input[i].length - 1]);
}
