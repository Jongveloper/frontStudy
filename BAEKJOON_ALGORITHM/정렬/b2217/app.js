const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();
let ropes = input.map((item) => +item);
ropes.sort((a, b) => a - b);
let min = ropes[0] * N;
for (let i = 1; i < N; i++) {
  let w = ropes[i] * (N - i);
  if (min < w) min = w;
}
console.log(min);
