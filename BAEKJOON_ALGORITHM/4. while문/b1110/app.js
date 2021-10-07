const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +input[0];
let idx = 0;
solution(input);

function solution(N) {
  while (true) {
    let sum = Math.floor(N / 10) + (N % 10);
    N = (N % 10) * 10 + (sum % 10);
    idx++;
    if (input === N) break;
  }
}
console.log(idx);
