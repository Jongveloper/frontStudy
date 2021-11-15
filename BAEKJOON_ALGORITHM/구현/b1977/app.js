const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const M = +input[0];
const N = +input[1];
const arr = [];
const answer = [];
for (let i = M; i <= N; i++) {
  if (Math.sqrt(i) % 1 === 0) arr.push(i);
}
answer.push(arr.length ? arr.reduce((a, b) => a + b) : -1);
answer.push(arr.length ? Math.min(...arr) : answer.pop());
console.log(answer.join('\n'));
