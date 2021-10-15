const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    if (i < 100) answer++;
    else {
      const numArr = i
        .toString()
        .split('')
        .map((num) => parseInt(num));
      if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
        answer++;
      }
    }
  }
  console.log(answer);
}
