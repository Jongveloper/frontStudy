const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

const N = input[0];
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}
arr.sort((a, b) => a - b);

console.log(arr.join('\n'));
