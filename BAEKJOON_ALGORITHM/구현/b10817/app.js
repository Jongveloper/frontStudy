const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

input.sort((a, b) => a - b);
console.log(input[1]);
