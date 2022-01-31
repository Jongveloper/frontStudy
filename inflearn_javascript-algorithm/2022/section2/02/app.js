const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(N, arr) {
  let answer = 0;
  let high = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    if (high < arr[i]) {
      high = arr[i];
      answer++;
    }
  }
  return answer;
}

console.log(solution(N, input));
