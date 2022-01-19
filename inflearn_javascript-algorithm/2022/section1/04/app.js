const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(parseInt(input)));
