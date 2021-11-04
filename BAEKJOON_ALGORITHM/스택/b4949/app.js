const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let stack = [];
for (let i = 0; i < input.length; i++) {
  stack = [];
  if (input[i][0] === '.') break;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === '(') stack.push(input[i][j]);
    else if (stack[stack.length - 1] === '(' && input[i][j] === ')')
      stack.pop();
    else if (input[i][j] === '[') stack.push(input[i][j]);
    else if (stack[stack.length - 1] === '[' && input[i][j] === ']')
      stack.pop();
  }
  if (stack.length === 0) console.log('yes');
  else console.log('no');
}
