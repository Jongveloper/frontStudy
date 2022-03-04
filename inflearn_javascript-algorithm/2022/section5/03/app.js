const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let ex = input
  .shift()
  .toString()
  .split(' ')
  .map((item) => +item);

let N = ex[0];
let M = ex[1];

input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(n, m, arr) {
  let answer = 0;
  let lt = 0,
    sum = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.log(solution(N, M, input));
