const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(s) {
  let answer = '';
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
}

console.log(solution(input));
