const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

let max = Math.max(...input);
console.log(max);
console.log(input.indexOf(max) + 1);
