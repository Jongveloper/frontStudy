// 문제 잘못봄..... 실수..
const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    let sum = input[i]
      .toString()
      .split('')
      .map((item) => +item)
      .reduce((a, b) => a + b);
    if (sum >= max) {
      max = sum;
      if (input[i] > answer) answer = input[i];
    }
  }
  return answer;
}

console.log(solution(input));
