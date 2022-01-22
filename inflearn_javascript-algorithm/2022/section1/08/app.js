const fs = require('fs');
const filePath = './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(arr) {
  let target = arr.reduce((a, b) => a + b) - 100;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (target === arr[i] + arr[j]) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

console.log(solution(input).join(' '));
