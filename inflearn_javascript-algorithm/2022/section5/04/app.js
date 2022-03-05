const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const ex = input.shift();
let N = +ex.toString().split(' ')[0];
let M = +ex.toString().split(' ')[1];

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
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(solution(N, M, input));
