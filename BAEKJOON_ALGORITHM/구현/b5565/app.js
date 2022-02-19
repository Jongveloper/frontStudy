const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

let sum = input.shift();
let lostSum = input.reduce((a, b) => a + b);

console.log(sum - lostSum);
