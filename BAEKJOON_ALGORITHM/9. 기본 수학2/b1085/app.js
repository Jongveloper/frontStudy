const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
const cnt = [x, y, w - x, h - y];

console.log(Math.min.apply(null, cnt));
