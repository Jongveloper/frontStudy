const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

const burger = [input[0], input[1], input[2]];
const drink = [input[3], input[4]];

console.log(Math.min(...burger) + Math.min(...drink) - 50);
