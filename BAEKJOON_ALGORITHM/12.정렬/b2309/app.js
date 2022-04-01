const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item)
  .sort((a, b) => a - b);
let arr;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (input.reduce((a, b) => a + b) === input[i] + input[j] + 100) {
      arr = input.filter((item) => item !== input[i] && item !== input[j]);
    }
  }
}

arr.sort((a, b) => a - b);
for (let i = 0; i < 7; i++) console.log(arr[i]);
