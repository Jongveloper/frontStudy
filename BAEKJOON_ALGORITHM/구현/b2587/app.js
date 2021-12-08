const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

input.sort((a, b) => a - b);
let avg = input.reduce((a, b) => a + b) / input.length;
let middle = input[Math.floor(input.length / 2)];
let answerArr = [];
answerArr.push(avg);
answerArr.push(middle);
console.log(answerArr.join('\n'));
