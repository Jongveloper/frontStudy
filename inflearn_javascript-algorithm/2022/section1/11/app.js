const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x.charCodeAt() <= 90) answer++;
  }
  return answer;
}

console.log(solution(input));
