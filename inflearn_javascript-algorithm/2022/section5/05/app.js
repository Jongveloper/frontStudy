const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let ex = input
  .shift()
  .toString()
  .split(' ')
  .map((item) => +item);

input = input
  .toString()
  .split(' ')
  .map((item) => +item);

let N = ex[0];
let M = ex[1];

function solution(n, m, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < m; i++) sum += arr[i];
  answer = sum;
  for (let i = m; i < n; i++) {
    sum += arr[i] - arr[i - m];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution(N, M, input));
