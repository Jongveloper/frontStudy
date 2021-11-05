const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift();
let arr = input
  .toString()
  .split(' ')
  .map((item) => +item);

arr.sort((a, b) => a - b);

const set = new Set(arr);
const answer = [...set];
console.log(answer.join(' '));
