const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(str, target) {
  let answer = 0;
  for (let x of str) {
    if (x === target) answer++;
  }
  return answer;
}

console.log(solution(input[0], input[1]));
