const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();

for (let i = 0; i < N; i++) {
  let answer = input[i][0].toUpperCase() + input[i].slice(1);
  console.log(answer);
}
