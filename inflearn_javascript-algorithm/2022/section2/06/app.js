const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(
    input[i]
      .toString()
      .split(' ')
      .map((item) => +item)
  );
}

function solution(array) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < N; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < N; j++) {
      sum1 += array[i][j];
      sum2 += array[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < N; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][N - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

console.log(solution(arr));
