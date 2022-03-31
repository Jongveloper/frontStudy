const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();
input = input
  .toString()
  .split(' ')
  .map((item) => +item)
  .sort((a, b) => a - b)
  .join(' ');

console.log(input);
