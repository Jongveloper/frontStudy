const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((item) => +item);

const S = input[1];
const R1 = input[0];

const MS = S * 2;
console.log(MS - R1);
