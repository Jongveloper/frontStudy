const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
  const margin = c - b;
  const count = Math.floor(a / margin) + 1;
  console.log(margin <= 0 ? -1 : count);
}
