const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const a = input
  .shift()
  .split(' ')
  .map((item) => +item);

const b = input
  .shift()
  .split(' ')
  .map((item) => +item);

a.sort((a, b) => a - b);
b.sort((a, b) => b - a);

const result = a.reduce((acc, curr, index) => {
  return acc + curr * b[index];
}, 0);

console.log(result);
