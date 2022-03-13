const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let best = 0;
let score = Number.MIN_SAFE_INTEGER;
function solution(arr, cook) {
  arr = arr.split(' ').map((item) => +item);
  let sum = arr.reduce((a, b) => a + b);
  if (sum > score) {
    score = sum;
    best = cook;
  }
}

for (let i = 0; i < input.length; i++) {
  solution(input[i], i + 1);
}

console.log(best, score);
