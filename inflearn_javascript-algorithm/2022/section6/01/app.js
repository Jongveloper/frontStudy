const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(s) {
  let answer = 'YES';
  const stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

console.log(solution(input));
