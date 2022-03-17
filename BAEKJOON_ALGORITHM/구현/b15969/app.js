const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const score = input[1]
  .toString()
  .split(' ')
  .map((item) => +item);

console.log(Math.max.apply(null, score) - Math.min.apply(null, score));
