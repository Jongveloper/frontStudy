const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0];
let NumArr = input[1].toString().split(' ');

function solution(arr, n) {
  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;
  let sum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let arrSum = arr[i]
      .split('')
      .map((item) => +item)
      .reduce((a, b) => a + b);
    if (arrSum > sum) {
      max = arr[i];
      sum = arrSum;
    } else if (arrSum === sum && arr[i] > max) {
      max = arr[i];
    }
  }
  return (answer = max);
}

console.log(solution(NumArr, n));
