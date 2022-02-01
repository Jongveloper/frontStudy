const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const N = +input.shift();
const A = input[0]
  .toString()
  .split(' ')
  .map((item) => +item);
const B = input[1]
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(N, A, B) {
  let answer = [];
  let s = 1;
  let r = 2;
  let p = 3;
  for (let i = 0; i < N; i++) {
    if (A[i] === s && B[i] === p) answer.push('A');
    else if (A[i] === r && B[i] === s) answer.push('A');
    else if (A[i] === p && B[i] === r) answer.push('A');
    else if (A[i] === B[i]) answer.push('D');
    else answer.push('B');
  }
  return answer.join('\n');
}

console.log(solution(N, A, B));
