const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x.toUpperCase() === x) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

console.log(solution(input));
