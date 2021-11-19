const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === 'P') {
    if (
      stack.length > 2 &&
      stack[stack.length - 1] === 'A' &&
      stack[stack.length - 2] === 'P' &&
      stack[stack.length - 3] === 'P'
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
    }
    stack.push('P');
  } else {
    stack.push(input[i]);
  }
}
console.log(
  stack.length === 1 && stack[stack.length - 1] === 'P' ? 'PPAP' : 'NP'
);
